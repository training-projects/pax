var gulp = require('gulp');

gulp.task('default', ['html', 'css', 'js', 'watch', 'browser-sync']);
gulp.task('no-live', ['html', 'css', 'js', 'watch']);
gulp.task('build',   ['html', 'css', 'js', 'images']);
