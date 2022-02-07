import gulp from 'gulp';
import del from 'del';

import {path,themes} from './config';

gulp.task('clean:static', () => del([ path.build.root ], {dot: true}));
