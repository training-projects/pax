var gulp        = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', ['css'], function() {
  browserSync.init({
    server: '.',
    notify: false
  });
});
