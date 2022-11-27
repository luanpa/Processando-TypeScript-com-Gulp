const { series } = require('gulp')
const gulp = require ('gulp')
const ts = require ('gulp-typescript')
const TsProject = ts.createProject('tsconfig.json')

function trasformacaoTS() {
    return TsProject.src()
    .pipe(TsProject())
    .pipe(gulp.dest('build'))
}

exports.default = series(trasformacaoTS)