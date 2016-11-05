var gulp     = require('gulp'),
    plumber  = require('gulp-plumber'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  gulp.src('src/images/**/*')
      .pipe(plumber())
      .pipe(imagemin({
        compress: true,
        interlaced: true,
        optimizationLevel: 3
      }))
      .pipe(gulp.dest('assets/images/'));
});
