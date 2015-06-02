'use strict';

var gulp = require('gulp');
var fs = require('fs');
var os = require('os');
var files = require('./files');

// load dependencies
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css'); //css
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');
var open = require('gulp-open');
var del = require('del');

// release
gulp.task('default', ['release']);
gulp.task('release', ['release:css', 'release:js']);

gulp.task('release:css', function() {

    //css
    return gulp.src(files.css)
        .pipe(sourcemaps.init())
        .pipe(concat(files.destCss))
        .pipe(autoprefixer({
            browsers: ['> 5%', 'last 5 version']
        })) // auto-prefix
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(files.release))
        // livereload when develop
        .pipe(connect.reload());
});

gulp.task('release:js', function() { // add jslint and uTest later maybe

    //js
    return gulp.src(files.js)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(files.release))
        // livereload when develop
        .pipe(connect.reload());
});

//-----------------------------------------------> for dev

gulp.task('dev', ['serve'], function() {
    if (files.entry) {
        var opts = {
            url: require('url').resolve("http://localhost:8080", files.entry),
            app: getChromeAppName()
        };

        gulp.src(files.entry)
            .pipe(open('', opts));
    }
});

gulp.task('serve', ['release', 'watch'], function() {

    connect.server({
        livereload: true
    });
});

gulp.task('reloadView', function() {

    //views
    return gulp.src(files.views)
        .pipe(connect.reload());
});

gulp.task('watch', function() {

    gulp.watch(files.js, ['release:js']);
    gulp.watch(files.css, ['release:css']);
    gulp.watch(files.views, ['reloadView']);
});

function getChromeAppName() {
    switch (os.platform()) {
        case 'win32':
            return 'chrome';
        case 'darwin':
            return 'google chrome'; // mac os
        case 'linux':
            return 'google-chrome';
    }
}