var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    sourcemaps   = require('gulp-sourcemaps'),
    stylus       = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus');

gulp.task('css', function() {
  gulp.src('src/css/main.styl')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(stylus({
        compress: true,
        use: autoprefixer({ browsers: ['last 2 versions'] })
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets/css/'));
});
