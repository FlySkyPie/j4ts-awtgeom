const gulp = require('gulp');
const appendPrepend = require('gulp-append-prepend');

const jsPath = 'bundle/j4ts-awtgeom.js';

gulp.task('inject-global', function () {
    return gulp.src(jsPath)
        .pipe(appendPrepend.appendText('\nglobalThis.java = java;\n'))
        .pipe(appendPrepend.appendText('\nglobalThis.sun = sun;\n'))
        .pipe(gulp.dest('dist'));
});