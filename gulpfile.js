// 必须先加载插件
const gulp = require('gulp'); //引入gulp模块
const html = require('gulp-minify-html');
const css = require('gulp-minify-css');
const sass = require('gulp-sass');
const uglifyjs = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const es2015 = require('babel-preset-es2015');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
// html压缩
gulp.task('htmlfile', () => {
	return gulp.src('src/*.html').pipe(html()).pipe(gulp.dest('dist/'));
});
// css压缩
gulp.task('cssfile', () => {
	return gulp.src('src/css/*.css').pipe(css()).pipe(gulp.dest('dist/css/'));
});
// js先es6转5,再压缩，合并，重命名
gulp.task('jsfile', () => {
	return gulp.src('src/script/js/*.js').pipe(babel({
		"presets":['es2015']
	})).pipe(uglifyjs()).pipe(gulp.dest('dist/script/js/'));
});
// 复制字体
gulp.task('fontfile', () => {
	return gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts/'));
});
// 编译sass
gulp.task('sassfile', () => {
	return gulp.src('src/sass/*.scss').pipe(sass({
		outputStyle: 'compressed'
	})).pipe(gulp.dest('dist/css/'));
});
// 图片压缩,必须是png
gulp.task('imgfile', () => {
	return gulp.src('src/img/*.png').pipe(imagemin()).pipe(gulp.dest('dist/img/'));
});
// 监听所有的变化,任务必须先执行一次,
gulp.task('watch', () => {
	watch(['src/*html', 'src/css/*.css', 'src/script/js/*.js'], gulp.parallel('htmlfile', 'cssfile', 'jsfile'));
});
