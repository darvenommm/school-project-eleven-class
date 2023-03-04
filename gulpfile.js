import gulp from 'gulp';
import gulpClean from 'gulp-clean';
import gulpCopy from 'gulp-copy';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';

const resultDirectory = 'dist';

const clear = () => {
  return gulp.src(resultDirectory).pipe(gulpClean());
};

const copyStatic = () => {
  return gulp.src('assets/**').pipe(gulpCopy(resultDirectory));
};

const minifyHtml = () => {
  return gulp
    .src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(resultDirectory));
};

const minifyCss = () => {
  return gulp
    .src('styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(resultDirectory));
};

export default gulp.series(gulp.parallel(copyStatic, minifyHtml, minifyCss));

export const clean = clear;
