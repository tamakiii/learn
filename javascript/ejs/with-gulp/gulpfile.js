var fs = require('fs')
var gulp = require('gulp')
var ejs = require('gulp-ejs')
var rename = require('gulp-rename')

gulp.task('ejs', function() {
  var json = JSON.parse(fs.readFileSync('data.json', 'UTF-8'))
  var template = 'template.ejs'

  json.pages.forEach(function(page) {
    gulp.src(template)
      .pipe(ejs({
        jsonData: page
      }))
      .pipe(rename(page.id + '.html'))
      .pipe(gulp.dest('dist'))
  })
})

gulp.task('watch', function() {
  gulp.watch(['template.ejs', 'data.json'], ['ejs'])
})
