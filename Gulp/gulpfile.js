var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var sass = require('gulp-sass');

var babel = require('gulp-babel');

var handlebars = require('gulp-handlebars');
var handlebarsLib = require('handlebars');
var declare = require('gulp-declare');
var wrap = require('gulp-wrap');

//Image Compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

//delete
var del = require('del');

//zip
var zip = require('gulp-zip');

//var less = require('gulp-less');
//var LessAutoprefixer = require('less-plugin-autoprefix');
//var lessAutoprefixer = new LessAutoprefixer({
//  browsers: ['last 2 versions']
//})
//var pump = require('pump'); //this is an error handling plugin. Not needed yet

//file paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
//var CSS_PATH = 'public/css/**/*.css';
var SCSS_PATH = 'public/scss/**/*.scss';
//var LESS_PATH = 'public/less/**/*.less';
var TEMPLATES_PATH = 'public/templates/**/*.hbs';
var IMAGES_PATH = 'public/images/**/*.{jpg,png,jpeg,svg,gif}';


// Styles
/**
 * Plain CSS task
 */
// gulp.task('styles', function() {
//     console.log('Styling...');
//
//     return gulp.src(['public/css/reset.css', CSS_PATH]) //always get reset.css first, then glob all others
//         .pipe(plumber(function(err){
//           console.log('Styles Task Error');
//           console.log(err);
//           this.emit('end'); //this line will stop this task chain but continue running gulp
//         }))
//         .pipe(sourcemaps.init())
//         .pipe(autoprefixer({
//           browsers: ['last 2 versions']
//         }))
//         .pipe(concat('live.css')) //take all stylesheets and put them into live.css
//         .pipe(minifycss())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(DIST_PATH + '/css'))
//         .pipe(livereload());
// });

/**
 * SCSS/SASS task
 */
gulp.task('sass-styles', function() {
    console.log('Styling...');

    return gulp.src(['public/scss/styles.scss']) //always get reset.css first, then glob all others
        .pipe(plumber(function(err){
          //this function will run WHEN an error occurs in this task
          console.log('Styles Task Error');
          console.log(err);
          this.emit('end'); //this line will stop this task chain but continue running gulp
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(sass({
          outputStyle: 'compressed'
        })
          .on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename({
            basename: "live"
          }))
        .pipe(gulp.dest(DIST_PATH + '/css'))
        .pipe(livereload());
});

/**
 * LESS task
 */
// gulp.task('less-styles', function() {
//     console.log('Styling...');
//
//     return gulp.src(['public/less/styles.less']) //always get reset.css first, then glob all others
//         .pipe(plumber(function(err){
//           //this function will run WHEN an error occurs in this task
//           console.log('Styles Task Error');
//           console.log(err);
//           this.emit('end'); //this line will stop this task chain but continue running gulp
//         }))
//         .pipe(sourcemaps.init())
//         .pipe(less({
//           plugins: [lessAutoprefixer]
//         }))
//         .pipe(minifycss())
//         .pipe(sourcemaps.write())
//         .pipe(rename({
//             basename: "live"
//           }))
//         .pipe(gulp.dest(DIST_PATH + '/css'))
//         .pipe(livereload());
// });

// Scripts
gulp.task('scripts', function() {
    console.log('Scripting...');

    return gulp.src(SCRIPTS_PATH)
        .pipe(plumber(function(err){
          //this function will run WHEN an error occurs in this task
          console.log('Styles Task Error');
          console.log(err);
          this.emit('end'); //this line will stop this task chain but continue running gulp
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('live.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH + '/scripts'))
        .pipe(livereload());
});

//Handlebars Templates
gulp.task('templates', function(){
    console.log('Templating...');

    return gulp.src(TEMPLATES_PATH)
      .pipe(handlebars({
        handlebars: handlebarsLib
      }))
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'templates',
        noRedeclare: true
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest(DIST_PATH + '/scripts'))
      .pipe(livereload());

});

// Images
gulp.task('images', function() {
    console.log('Imaging...');

    return gulp.src(IMAGES_PATH)
      .pipe(imagemin(
        [
          imagemin.gifsicle(),
          imagemin.jpegtran(),
          imagemin.optipng(),
          imagemin.svgo(),
          imageminJpegRecompress(),
          imageminPngquant(),
        ]
      ))
      .pipe(gulp.dest(DIST_PATH + '/images'));

});

//Clean workspace
gulp.task('clean', function(){
  console.log('Cleaning...');
  return del.sync([
    DIST_PATH+'/**', '!'+DIST_PATH //You have to explicitly ignore the parent directories. /** also matches parent directory
  ]);
});

//Export working files to zip
gulp.task('export', function(){
  console.log('Exporting...');
  return gulp.src('public/**/*')
    .pipe(zip('website.zip'))
    .pipe(gulp.dest('./'));
});

// Default task, will run all common tasks at once
gulp.task('default', ['clean','sass-styles','images','templates','scripts'], function() {
    console.log('Gulping...');


});

// Setup gulp dev server
gulp.task('watch', ['default'], function() {
    console.log('Watching you...');
    require('./server');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    //gulp.watch(CSS_PATH, ['styles']);
    gulp.watch(SCSS_PATH, ['sass-styles']);
    //gulp.watch(LESS_PATH, ['less-styles']);
    gulp.watch(TEMPLATES_PATH, ['templates']);
});
