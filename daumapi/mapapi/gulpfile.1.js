
'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st');

gulp.task('less', function() {
  gulp.src('app/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: 'dist' });
  gulp.watch('app/styles/*.less', ['less']);
});

gulp.task('server', function(done) {
  browserSync.init({
    server: "./dist"
    ,files : [
      "./dist/*.html"
      ,"./dist/styles/*.css"
    ]
  });
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8081, done);
});

gulp.task('default', ['watch']);
