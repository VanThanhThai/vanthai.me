var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['serve'], function () {
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("css/*.css", ['bs-reload']);
    gulp.watch("js/*.js", ['bs-reload']);
});