const gulp = require('gulp');
const merge = require('gulp-merge');
const print = require('gulp-print');
const fs = require('fs')
const path = require('path')
const pkgpath = require('packpath')

const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));
const dest = (...paths) => path.resolve(pkgpath.self(), src.dest, ...paths);

const injectModulePaths = (staticPath) => {
  const staticBundle = fs.readFileSync(staticPath);
  console.log(staticBundle);

  const fixedStaticBundle =
    staticBundle.indexOf('module.paths = require.main.paths') === -1
      ? `module.paths = require.main.paths;${staticBundle}`
      : staticBundle;

  fs.writeFileSync(staticPath, fixedStaticBundle);
};

const getContext = (context) => {
	let result;
	result = context.keys().filter((key) => key.indexOf('.example.mdx') !== -1);

	console.log(result);
};

module.exports = () => {
	injectModulePaths(dest());

	/*
		context requirements wrapped inside exports due to use of
		Webpack exclusive `require.context()` method
	*/
	const {
		atomsContext,
		moleculesContext,
		organismsContext,
		templatesContext
	} = require('./context-helpers');

	console.log(atomsContext);

	// merge(
	// 	...getContext(atomsContext),
	// 	...getContext(moleculesContext),
	// 	...getContext(organismsContext),
	// 	...getContext(templatesContext)
	// )
	// .pipe(print())
	// .pipe(gulp.dest('./dist'));
};
