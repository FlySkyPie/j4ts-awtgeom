const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('inject-global', function () {
    return gulp.src(['bundle/j4ts-awtgeom.js', 'src/exporter.js'])
        .pipe(concat("j4ts-awtgeom.js"))
        .pipe(gulp.dest('dist'));
});