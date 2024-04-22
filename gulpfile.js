const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const plumber = require("gulp-plumber"); // This is used to prevent gulp from stopping on errors

// PugJs files
gulp.task("pugCompile", async function () {
  return gulp
    .src("dev-version/pug/*.pug")
    .pipe(plumber()) // Prevent Gulp from stopping on errors
    .pipe(pug({ pretty: true }))
    .on("error", console.error.bind(console)) // Error handling (error event)
    .pipe(gulp.dest("./dist"));
});

// Sass files
gulp.task("sassCompile", async function () {
  // Dynamically import required plugin
  const [autoprefixer] = await Promise.all([import("gulp-autoprefixer")]); // Import() returns a promise

  return gulp
    .src("dev-version/sass/dashboard.scss")
    .pipe(plumber()) // Prevent Gulp from stopping on errors
    .pipe(sass())
    .on("error", console.error.bind(console)) // Error handling (error event)
    .pipe(autoprefixer.default()) // Use default export from dynamic import
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("jsConcat", async function () {
  return gulp
    .src("./dev-version/js/*.js")
    .pipe(plumber()) // Prevent Gulp from stopping on errors
    .pipe(concat("main.js"))
    .on("error", console.error.bind(console)) // Error handling
    .pipe(gulp.dest("./dist/js"));
});

// Watch task
gulp.task("watch", async function () {
  gulp.watch("./dev-version/**/*.pug", gulp.series("pugCompile"));
  gulp.watch("./dev-version/sass/**/*.scss", gulp.series("sassCompile"));
  gulp.watch("./dev-version/js/*js", gulp.series("jsConcat"));
});

// Default (inevitable name)
gulp.task("default", gulp.series("watch"));
