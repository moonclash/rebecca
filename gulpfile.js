const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass',function() {
  return gulp.src('./src/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src'));
});

gulp.task('autoprefixer',function() {
  return gulp.src('./src/*.css')
  .pipe(autoprefixer({
    browsers : ['last 4 versions'],
    cascade : false
  }))
  .pipe(gulp.dest('./src'));
});

gulp.task('minify-css', function() {
    return gulp.src('./src/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./src/min'));
});
gulp.task('watch',function() {
  gulp.watch('./src/*.scss',['sass']);
  gulp.watch('./src/*.css',['minify-css','autoprefixer']);
});