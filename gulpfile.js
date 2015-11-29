var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./node_modules/angular/angular.js')
      .pipe(gulp.dest('./js/lib/'));

  gulp.src('./node_modules/bootswatch/paper/bootstrap.css')
      .pipe(gulp.dest('./css/'));

  gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
      .pipe(gulp.dest('./fonts/'));

  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
      .pipe(gulp.dest('./js/lib/'));

  gulp.src('./node_modules/font-awesome/fonts/*.*')
      .pipe(gulp.dest('./fonts/'));

  gulp.src('./node_modules/font-awesome/css/font-awesome.css')
      .pipe(gulp.dest('./css/'));

  gulp.src('./node_modules/jquery/dist/jquery.js')
      .pipe(gulp.dest('./js/lib/'));

  gulp.src('./node_modules/angular-route/angular-route.js')
      .pipe(gulp.dest('./js/lib/'));
});
