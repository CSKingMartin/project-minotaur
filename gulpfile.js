const gulp = require('gulp');
const run = require('gulp-run-command').default;
const clean = require('gulp-clean');
const rename = require('gulp-rename');

gulp.task('clean', run('rm -rf ./src/pages/styleguide/*'));

gulp.task('clean', () => {
  return gulp.src('src/pages/styleguide/', {read: false, allowEmpty: true})
  .pipe(clean());
});

gulp.task('exportPages', () => {
  return gulp.src('src/**/*.example.mdx')
  .pipe(rename((path) => {
    path.basename = 'index'
  }))
  .pipe(gulp.dest('src/pages/styleguide'));
});

gulp.task('next', run('next ./src'));

gulp.task('dev', gulp.series('clean', 'exportPages', 'next'));