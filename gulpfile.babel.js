import gulp from 'gulp';

import tasks from './gulp-tasks';
import {path} from './gulp-tasks/config';
import {info} from './gulp-tasks/logs';

let commomTasks = ['styles', 'media', 'fonts', 'img', 'twig'];

gulp.task('prod-node-env', () => {
    return new Promise(function(resolve, reject) {
        info('Setting NODE_ENV to production...')
        process.env.NODE_ENV = 'production';
        resolve();
    });
});


gulp.task('default', gulp.series('clean:static',...commomTasks, 'watch'));
gulp.task('build:static', gulp.series('clean:static','prod-node-env','js', ...commomTasks,'compress'));
gulp.task('sync', gulp.series('clean:static','build:static','compress','copy-modules'));