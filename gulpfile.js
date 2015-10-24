var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
 
gulp.task('sass', function () {
  gulp.src('./assets/scss/default.scss')
    .pipe(sass({
      includePaths: require('node-neat').includePaths
    }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
        entry: "./assets/js/client.js",
	    output: {
	        path: __dirname,
	        filename: "./public/js/app.js"
	    },
        module: {
            loaders: [
              { test: /\.js$/, loader: 'babel-loader' }
            ]
        }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
  gulp.watch('./components/**/*.js', ['webpack']);
});