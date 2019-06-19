const gulp = require('gulp');
const run = require('gulp-run-command').default;
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprites');

gulp.task('clean', () => gulp.src(['src/pages/catalog/atoms/', 'src/pages/catalog/molecules/', 'src/pages/catalog/organisms/'], { read: false, allowEmpty: true })
  .pipe(clean()));

gulp.task('exportPages', () => gulp.src('src/**/*.example.mdx')
  .pipe(rename((path) => {
    path.basename = 'index';
  }))
  .pipe(gulp.dest('src/pages/catalog')));

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
], gulp.series('exportPages', 'generateSvgSprite')));

gulp.task('next', gulp.parallel([run('next ./src'), 'watch']));

gulp.task('dev', gulp.series('clean', 'exportPages', 'generateSvgSprite', 'next'));
