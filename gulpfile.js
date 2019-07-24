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
      entry.path = `/catalog/${path.substring(4)}`;
    } catch(err) {}

    entry.props = {}; // empty obj for props to go into

    const contents = file.contents.toString();

    /* GET PROPS */
    const startOfProps = contents.substring(contents.indexOf('.propTypes = {') + 17);
    const props = startOfProps.substring(0, startOfProps.indexOf('};')).split('\n  ');

    props.forEach((prop) => {
      const propsObject = {};
      const name = prop.substring(0, prop.indexOf(':'));
      if (name !== '') {
        const getType = (string) => {
          let returnValue;
          if (string.indexOf('oneOfType') !== -1) {
            const returnObject = [];
            const prefix = contents.substring(contents.indexOf('oneOfType('));
            const value = prefix.substring(prefix.indexOf('[') + 3, prefix.indexOf(']') + 2);

            let testString = value;
            let i = 0;

            while (testString.length > 0) {
              let sub = testString.substring(testString.indexOf('PropTypes'), testString.indexOf(','));

              if (sub.length === 0) {
                sub = testString.substring(testString.indexOf('PropTypes'), testString.indexOf(')') + 1);
              }

              if (sub !== '' && sub.indexOf('\n') === -1) {
                const newTestStart = testString.substring(testString.indexOf(sub) + sub.length);
                testString = newTestStart.substring(newTestStart.indexOf('P'));
                const query = sub.substring(sub.indexOf('PropTypes.') + 10);
                returnObject.push(getType(query));
              } else {
                testString = testString.substring(testString.length);
              }
            }

            returnValue = { 'oneOfType': returnObject };
          } else if (string.indexOf('oneOf') !== -1) {
            const prefix = string.substring(string.indexOf('oneOf(') + 6);
            const value = prefix.substring(prefix.indexOf('[') + 2, prefix.indexOf(']') - 1);
            returnValue = { 'oneOf': value.split("', '") };
          } else {
            returnValue = string;
          }

          return returnValue;
        };

        const type = prop.substring(prop.indexOf('PropTypes.') + 10, prop.length - 1);
        propsObject.name = name;
        propsObject.type = getType(type);
        entry.props[name] = propsObject;
      }
    });

    /* GET DEFAULT PROPS */
    entry.defaultProps = {}

    if(contents.indexOf('.defaultProps = {') != -1){
      const startOfDefaultProps = contents.substring(contents.indexOf('.defaultProps = {') + 17);
      const defaultProps = startOfDefaultProps.substring(0, startOfDefaultProps.indexOf('};')).split('\n  ');

      defaultProps.forEach((defaultProp) => {
        const defaultPropsObject = {};
        const name = defaultProp.substring(0, defaultProp.indexOf(':'));

        if (name !== '') {
          const value = defaultProp.substring(defaultProp.indexOf(':') + 2);

          if (value !== '') {
            let truevalue = value.replace(/['"]+/g, ''); // getting rid of quotes
            truevalue = truevalue.replace(',', ''); // getting rid of commas
            truevalue = truevalue.replace('\n', ''); //getting rid of new lines
            if (truevalue.startsWith("false")) {
              truevalue = false;
            }
            if (truevalue === "true") {
              truevalue = true;
            }
            entry.defaultProps[name] = truevalue;
          }
        }
      });
    }

    entry.inherits = [];

    registry[entry.name] = entry;

    cb(null, file);
  })).pipe(map((file, cb) => { // second pass
    const path = file.path.substring(file.path.indexOf('src/'), file.path.indexOf('/index.jsx'));
    const name = path.substring(path.lastIndexOf('/') + 1);

    let remainingFile = file.contents.toString();
    let i = 0;
    while (remainingFile.length > 0) {
      if (remainingFile.indexOf('import ') > -1) {
        const importer = remainingFile.substring('import ');
        const statement = importer.substring(0, importer.indexOf(';') + 1);
        const prefix = statement.substring(statement.indexOf('import ') + 7);
        const inheritor = prefix.substring(0, prefix.indexOf(' '));

        if (registry[inheritor]) {
          registry[name].inherits.push(inheritor);
        }
        remainingFile = importer.substring(importer.indexOf(statement) + statement.length);
      } else { // no more left of file - remove rest to escape loop
        remainingFile = remainingFile.substring(remainingFile.length);
      }
    }
    cb(null, file);
  })).on('end', () => {
    fs.writeFileSync('./src/registry.json', JSON.stringify(registry, null, "\t"));
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
  'src/atoms/**/*.jsx',
  'src/molecules/**/*.example.mdx',
  'src/molecules/**/*.jsx',
  'src/organisms/**/*.example.mdx',
  'src/organisms/**/*jsx'
], gulp.series('exportPages', 'generateSvgSprite', 'registry')));

gulp.task('next', gulp.parallel([run('next ./src'), 'watch']));

gulp.task('dev', gulp.series('clean', 'registry', 'exportPages', 'generateSvgSprite', 'next'));
