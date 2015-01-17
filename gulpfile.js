// Load plugins
var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer');


// Styles
gulp.task('styles', function(){
	return sass('sass/style.scss', {style: 'expanded'})
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('.'))
});

// Default task
gulp.task('default', function(){
	gulp.start('styles');
});

// Watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
});