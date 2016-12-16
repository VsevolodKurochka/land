/*
	npm install --save gulp-install
	npm init
*/
var gulp = require('gulp'),
		install = require('gulp-install'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		del = require('del'),
		autoprefixer = require('gulp-autoprefixer');

gulp.src(['./package.json'])
  .pipe(install());

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass({
		 	outputStyle: 'expanded'
	 	}).on('error', sass.logError))
		.pipe(autoprefixer(
			{browsers: ['last 2 versions', 'ie 11', 'Android >= 4.1', 'Safari >= 8', 'iOS >= 8']}
		))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'] ,function(){
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/*.js', browserSync.reload);
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('build', ['clean', 'sass'], function(){
	var buildCss = gulp.src('app/css/style.css')
		.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'))

	var buildImg = gulp.src('app/img/*')
		.pipe(gulp.dest('dist/img'))

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
});

//If you enter 'gulp', gulp will do 'watch' function
gulp.task('default', ['watch']);

gulp.task('clear', function(){
	return cache.clearAll();
});