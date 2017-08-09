var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass',function(){
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
});

gulp.task('browser-sync',function(){
    browserSync.init({
      server: {
        baseDir:"./"
      }
    });
});
gulp.task('watch',function(){
    gulp.watch('scss/**/*scss', ['sass']);
    gulp.watch('**/*html').on('change', browserSync.reload);
});
gulp.task('default',['sass','browser-sync','watch']);
