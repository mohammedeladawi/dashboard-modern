const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));

// PugJs files
gulp.task("pugCompile", function () {
  return gulp
    .src("dev-version/*.pug")
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
    .pipe(sass())
    .on("error", console.error.bind(console)) // Error handling
    .pipe(autoprefixer.default()) // Use default export from dynamic import
    .pipe(gulp.dest("./dist/css"));
});

// Watch task
gulp.task("watch", async function () {
  gulp.watch("./dev-version/**/*.pug", gulp.series("pugCompile"));
  gulp.watch("./dev-version/sass/**/*.scss", gulp.series("sassCompile"));
});
