var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/*
--  TOP LEVEL FUNCTIONS --

gulp.task   -   defines tasks
gulp.src    -   point to files to use
gulp.dest   -   points to folder to output
gulp.watch  -   watch files and folder for changes

*/

// Copy all HTML files

gulp.task('copyHtml', function(){

    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});


// Optimize images

gulp.task('imageMin', () =>

    gulp.src('src/images/*')
         .pipe(imagemin())
         .pipe(gulp.dest('dist/images'))
);


// Compile SASS + autoprefix + minimalize

gulp.task('sass', function(){
    var minim = {}; // minimalizuje plik CSS
    minim.outputStyle = 'compressed';   // minimalizuje plik CSS
    
  gulp.src('src/sass/*.{sass,scss}')
  .pipe(sass(minim).on('error', sass.logError)) // wstaw minim
     .pipe(autoprefixer()) // autoprefix
  .pipe(gulp.dest('dist/css'));
});


// Scripts  and Minify

gulp.task('scripts', function(){

  gulp.src('src/js/**/*.js')
  .pipe(concat('main.js'))
    .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});


// RUN ALL TASKS (napisz: "gulp" albo "gulp default")

gulp.task('default', ['copyHtml', 'imageMin', 'sass', 'scripts']);


// WATCH ALL TASKS (będzie aktualizował na bierząco po każdym zapisaniu)

gulp.task('watch', function(){

  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});



