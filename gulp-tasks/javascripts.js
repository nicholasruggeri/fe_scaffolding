import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babel from 'babelify';
import browserSync from 'browser-sync';
import gulpif from 'gulp-if';

import {path,isProduction} from './config';
import {info,error} from './logs';

gulp.task('js', done => {
    var bundler = browserify(`${path.dev.js}index.js`, { debug: true })
        .transform(babel);

    const rebundle = () => {
        bundler.bundle()
        .on('error', error)
        .on('end', done)
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(gulpif(!isProduction(), sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(!isProduction(), sourcemaps.write('./')))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
    }

    if(!isProduction()) {
        bundler.plugin('watchify', { poll: true })
        .on('update', rebundle)
        .on("log", message => { info(`Javascript: ${message}`) });
    }

    return rebundle();
});
