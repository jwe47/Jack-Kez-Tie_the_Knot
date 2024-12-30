'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var terser = require('gulp-terser');  // Replacing uglify with terser
var rename = require('gulp-rename');

// compile scss to css
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'styles.min'}))
        .pipe(gulp.dest('./css'));
});

// watch changes in scss files and run sass task
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

// minify js with terser
gulp.task('minify-js', function () {
    return gulp.src('./js/scripts.js')
        .pipe(terser())  // Using terser for ES6+ compatibility
        .pipe(rename({basename: 'scripts.min'}))
        .pipe(gulp.dest('./js'));
});

// default task
gulp.task('default', gulp.series('sass', 'minify-js'));
