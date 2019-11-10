const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const gls = require('gulp-live-server');

gulp.task('serve', function() {
    // 1. serve with default settings
    // var server = gls.static(); //equals to gls.static('public', 3000);
    // server.start();
 
    //2. serve at custom port
    var server = gls.new('live-server', 8080);
    server.start();
 
    // 3. serve multi folders
    // var server = gls.static(['dist', '.tmp']);
    // server.start();
 
    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch('public/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('styles', () => {
    return gulp.src('public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('clean', () => {
    return del([
        'public/css/*.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('public/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});