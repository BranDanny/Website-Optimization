var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('testHtmlmin', function () {
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  };

  gulp.src('./*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/html'));
  gulp.src('views/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('views/dist/html'));
});

gulp.task('testCssmin', function () {
  gulp.src('css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
  gulp.src('views/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('views/dist/css'));
});

gulp.task('jsmin', function () {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  gulp.src('views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('views/dist/js'));
});