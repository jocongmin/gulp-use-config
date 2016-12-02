var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('local', function() {
  connect.server({
    root: './',
    port: 8083,
    livereload: true
  });
});
// 注册任务