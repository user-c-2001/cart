const {src,dest,watch} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = (require('gulp-sass'))(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const GulpClient = require('gulp');

let copyIndex = function(){
    return src('./src/index.html')
        .pipe(dest('./dist'));
}
let fnHTML = function(){
    return src('./src/html/**/*.html')
        .pipe(htmlmin())
        .pipe(dest('./dist/html'));
}
let copyLib = function(){
    return src('./src/lib/**/*')
        .pipe(dest('./dist/lib'));
}
let fnData = function(){
    return src('./src/data/**/*')
        .pipe(dest('./dist/data'));
}
let fnImg = function(){
    return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}
let fnCSS = function(){
    return src('./src/css/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(dest('./dist/css'));
}
let fnjS = function(){
    return src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(dest('./dist/js'));
}
let fnWatch = function(){
    watch('./src/index.html',copyIndex);
    watch('./src/html/**/*.html',fnHTML);
    watch('./src/lib/**/*',copyLib);
    watch('./src/data/**/*',fnData);
    watch('./src/img/**/*',fnImg);
    watch('./src/css/**/*.scss',fnCSS);
    watch('./src/js/**/*.js',fnjS);
}

exports.copy = copyIndex;
exports.html = fnHTML;
exports.lib = copyLib;
exports.data = fnData;
exports.img = fnImg;
exports.css = fnCSS;
exports.js = fnjS;
exports.default = fnWatch;