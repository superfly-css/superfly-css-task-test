//==================================================
//  Task
//  test:css
//  For the description see [SupeflyCSS Test Task](https://github.com/superfly-css/superfly-css-task-test/)
//==================================================

var gulp = require('gulp');
var cheerio = require('gulp-cheerio');
var highlight = require('gulp-highlight');
var path = require('path');

var PLI = require('superfly-css-pli');
var GLOB = require('glob-patterns');

var renderTestBlock = '\n    <div class="Test-render"></div>';

//---------------------------------------------------
//All the css files to be tested
//---------------------------------------------------
var glob = path.join(PLI.src.test.html, GLOB.ALL_HTML);

//---------------------------------
gulp.task('test:css', function() {
  return gulp
    .src(glob)
    .pipe(cheerio(function($, file) {
      $('.Test-markup > code').each(function() {
        var markup = $(this).html();
        //Insert the Test-render block after the Test-then block
        //Append the markup block to the Test-render block
        $($(this).parent().next()).after(renderTestBlock).next().append(markup);
      });
    }))
    .pipe(highlight())
    .pipe(gulp.dest(PLI.target.test.html));
});
