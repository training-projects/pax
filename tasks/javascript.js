var gulp       = require('gulp'),
    plumber    = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify');

gulp.task('js', function() {
  gulp.src('src/js/*.js')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets/js/'));
});
