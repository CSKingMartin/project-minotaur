const gulp = require('gulp');
const run = require('gulp-run-command').default;
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprites');
const print = require('gulp-print').default;
const map = require('map-stream');
const fs = require('fs');
const log = require('fancy-log');
const registry = {};

gulp.task('clean', () => gulp.src(['src/pages/catalog/atoms/', 'src/pages/catalog/molecules/', 'src/pages/catalog/organisms/'], { read: false, allowEmpty: true })
  .pipe(clean()));

gulp.task('exportPages', () => gulp.src('src/**/*.example.mdx')
  .pipe(rename((path) => {
    path.basename = 'index';
  }))
  .pipe(gulp.dest('src/pages/catalog')));

gulp.task('registry', () => gulp.src('src/**/**/index.jsx')
  .on('end', () => { log('Processing Component files...') })
  .pipe(map((file, cb) => {
    const entry = {};
    const path = file.path.substring(file.path.indexOf('src/'), file.path.indexOf('/index.jsx'));

    entry.localPath = path;
    entry.name = path.substring(path.lastIndexOf('/') + 1);
    entry.category = path.substring(path.indexOf('/') + 1, path.lastIndexOf('/') - 1);

    const exampleFileQuery = `./${path.substring(0, path.lastIndexOf('/'))}/${entry.name}/${entry.name}.example.mdx`;

    try {
      fs.statSync(exampleFileQuery);
      entry.path = `/catalog/${path}`;
    } catch(err) {}

    entry.props = {}; // empty obj for props to go into

    const contents = file.contents.toString();

    /* GET PROPS */
    const startOfProps = contents.substring(contents.indexOf('.propTypes = {') + 17);
    const props = startOfProps.substring(0, startOfProps.indexOf('};')).split('\n  ');
    
    props.forEach((prop) => {
      const name = prop.substring(0, prop.indexOf(':'));
      if (name !== '') { entry.props[name] = prop.substring(prop.indexOf('PropTypes.') + 10, prop.length - 1); }
    });

    entry.inherits = [];

    /* GET IMPORTS */
    let remainingFile = contents;
    let i = 0;
    while (remainingFile.length > 0) {
      if (remainingFile.indexOf('import ') > -1) {
        const importer = remainingFile.substring('import ');
        const statement = importer.substring(0, importer.indexOf(';') + 1);
        const prefix = statement.substring(statement.indexOf('import ') + 7);
        const inheritor = prefix.substring(0, prefix.indexOf(' '));
        
        entry.inherits.push(inheritor);

        remainingFile = importer.substring(importer.indexOf(statement) + statement.length);
      } else {
        remainingFile = remainingFile.substring(remainingFile.length);
      }
    }
    
    registry[entry.name] = entry;

    cb(null, file);
  })).on('end', () => {
    fs.writeFileSync('./src/registry.json', JSON.stringify(registry));
  }));

gulp.task('generateSvgSprite', () => gulp.src('src/atoms/Icon/assets/*.svg')
  .pipe(svgSprite({
    mode: 'symbols',
    example: false
  }))
  .pipe(rename((path) => {
    path.basename = 'bundle';
  }))
  .pipe(gulp.dest('src/static/svgs/')));

gulp.task('watch', () => gulp.watch([
  'src/atoms/Icon/assets/**.*', // triggers Icon rebuild
  'src/atoms/**/*.example.mdx',
  'src/molecules/**/*.example.mdx',
  'src/organisms/**/*.example.mdx'
], gulp.series('exportPages', 'generateSvgSprite', 'registry')));

gulp.task('next', gulp.parallel([run('next ./src'), 'watch']));

gulp.task('dev', gulp.series('clean', 'registry', 'exportPages', 'generateSvgSprite', 'next'));
