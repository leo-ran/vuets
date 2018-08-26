const gulp = require('gulp')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const uglify = require('gulp-uglify')
const tsProject = ts.createProject('tsconfig.json')
gulp.task('tsc', function(){
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('ts'))
})

gulp.task('default', ['tsc'] ,function(){
    return gulp.src('ts/**/*.js')
    .pipe(babel({
        presets:['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})