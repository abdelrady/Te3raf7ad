var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


var monitoredFiles = ['*.js', '*.json'];

gulp.task('monitor', [], function () {
    var options = {
        script: 'index.js',
        delayTime: 1,
        env: {
            'PORT': 8085
        },
        watch: monitoredFiles
    }

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting....');
        })
})
