var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('testHtmlmin', function () {
  var options = {
    removeComments: true,//���HTMLע��
    collapseWhitespace: true,//ѹ��HTML
    collapseBooleanAttributes: true,//ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//ɾ�����пո�������ֵ <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//ɾ��<script>��type="text/javascript"
    removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
    minifyJS: true,//ѹ��ҳ��JS
    minifyCSS: true//ѹ��ҳ��CSS
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