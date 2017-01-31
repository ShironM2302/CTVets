var gulp = require('gulp');

var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglifyjs');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');

var onError = function (err) {
    notify({
         title: 'Gulp Task Error',
         message: 'Check the console.'
     }).write(err);

     console.log(err.toString());

     this.emit('end');
}


gulp.task('copy', function(){
  return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
});

gulp.task('script', function(){
  return gulp.src('src/js/*.js')
    .pipe(plumber({ errorHandle: onError }))
    .pipe(uglify())
    .on('error', onError)
    .pipe(gulp.dest('dist/js'))
})

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
      .pipe(plumber({ errorHandle: onError }))
      .pipe(sass())
      .on('error', onError)
      .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('src/css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify({
      title   : 'Gulp Task Complete',
      message : 'Styles have been compiled'
  }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})


gulp.task('watch', [ 'sass','script','copy', 'browserSync','images'], function (){
  gulp.watch('src/scss/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/*.js', browserSync.reload);
});
