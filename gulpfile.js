var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var src = {
    css: ['./src/css/style.css', './src/css/mentees.css', './src/css/mentors.css'],
    js: ['./src/js/mentors.js', './src/js/mentees.js'],
    json: ['/src/json/*.json']
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
        .pipe(sourcemaps.init())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());

});

gulp.task('json', function() {

    return gulp.src(src.json)
        .pipe(gulp.dest('./public'));


});

gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('json-watch', ['json'], browserSync.reload);

gulp.task('js', function() {

    return gulp.src(vendors.js.concat(src.js))
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./public'));

});


gulp.task('default', ['css', 'js', 'html', 'json']);

gulp.task('serve', ['default'], function() {
    browserSync.init({
        server: "./public"
    });
    gulp.watch(src.css, ['default']);
    gulp.watch(src.json, ['default']);
    gulp.watch("./src/index.html", ['html']);
    gulp.watch(src.json, ['json-watch']);

    gulp.watch(src.js, ['js-watch']);
    gulp.watch("./public/index.html").on('change', browserSync.reload);

});