var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/html/**/*.jade', ['html']);
  gulp.watch('src/css/**/*.styl',  ['css']);
  gulp.watch('src/js/**/*.js',     ['js']);
});
