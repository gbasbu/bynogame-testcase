const gulp = require('gulp')
const webpack = require('webpack')

gulp.task('build', done => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    if (err || stats.hasErrors()) {
      done(err)
    } else {
      done()
    }
  })
})
