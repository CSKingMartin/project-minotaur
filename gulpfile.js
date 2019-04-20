const gulp = require('gulp')
const run = require('gulp-run-command').default
// const sequence = require('sequence')
const static = require('./lib/render-helpers')

gulp.task('next', run('next ./src'))

gulp.task('default', gulp.series('next', () => {
	static();
}));

// gulp.task('dev', static());
