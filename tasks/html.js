var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    jade    = require('gulp-jade');

gulp.task('html', function() {
  gulp.src('src/html/*.jade')
      .pipe(plumber())
      .pipe(jade({ pretty: true }))
      .pipe(gulp.dest('.'));
});
