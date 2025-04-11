let gulp = require('gulp')
let sass = require('gulp-sass')(require('sass'))
let sourcemaps = require('gulp-sourcemaps')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(styles))
}