var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var src = {
    css: ['./src/css/style.css'],
    js: ['./src/js/mentors.js']
};

var vendors = {
    css: ["./bower_components/bootstrap/dist/css/bootstrap.css"],
    js: ['./bower_components/angular/angular.js']
};

gulp.task('html', function() {

    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./public'));

});

gulp.task('css', function() {

    return gulp.src(vendors.css.concat(src.css))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());

});

gulp.task('js', function() {

    return gulp.src(vendors.js.concat(src.js))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public'));

});


gulp.task('default', ['css', 'js', 'html']);

gulp.task('serve', ['default'], function() {
    browserSync.init({
        server: "./public"
    });
    gulp.watch(src.css, ['default']);
    gulp.watch("./src/index.html", ['html']);
    gulp.watch("./public/index.html").on('change', browserSync.reload);

});