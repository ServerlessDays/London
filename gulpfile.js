var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var minifyInline = require("gulp-minify-inline");
var pump = require("pump");
var historyApiFallback = require("connect-history-api-fallback");
var fileinclude = require("gulp-file-include");
var browserSync = require("browser-sync").create();
var del = require("del");
var plumber = require("gulp-plumber");
var fs = require("fs");

gulp.task("clean", function() {
  return del(["dist/**", "src/html-compiled/**"]);
});

gulp.task("fileinclude", ["dev-assets", "generateTalks"], function(callback) {
  return gulp
    .src(["src/html/*.html"])
    .pipe(plumber())
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("src/html-compiled/"))
    .pipe(browserSync.stream());
});

gulp.task("dev-assets", ["clean"], function(callback) {
  return gulp
    .src(["src/imgs/**/*.*", "src/html/*.css"])
    .pipe(gulp.dest("src/html-compiled/"));
});

gulp.task("minify", ["fileinclude"], function() {
  return gulp
    .src("src/html-compiled/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(minifyInline())
    .pipe(gulp.dest("dist"));
});

gulp.task("copy", function() {
  return gulp
    .src([
      "src/_redirects",
      "src/*.xml",
      "src/*.txt",
      "src/*.pdf",
      "src/imgs/**",
    ])
    .pipe(gulp.dest("dist"));
});

gulp.task("generateTalks", () => {
  const talks = require("./src/talks");
  const template = fs.readFileSync("./src/html/talk-template.html", {
    encoding: "utf-8",
  });

  talks.forEach(talk => {
    const { key, photoUrl, title, speaker, abstract, bio } = talk;

    const content = template
      .replace(/%photoUrl%/gi, photoUrl)
      .replace(/%title%/gi, title)
      .replace(/%speaker%/gi, speaker)
      .replace(/%bio%/gi, bio)
      .replace(/%abstract%/gi, abstract.replace(/\n/g, "<br/><br/>"))
      .replace(/%key%/gi, key);

    fs.writeFileSync(`src/html/talk-${key}.html`, content, {
      encoding: "utf-8",
    });
  });
});

gulp.task("build", ["fileinclude", "minify", "copy"]);

gulp.task("include-watch", ["fileinclude"], browserSync.reload);

gulp.task("watch", ["fileinclude", "browser-sync"], function() {
  "use strict";
  gulp.watch("./src/html/**/*.html", ["include-watch"]);
  gulp.watch("./src/html/**/*.css", ["include-watch"]);
  gulp.watch("./src/*.json", ["include-watch"]);
  gulp.watch("./src/*.js", ["include-watch"]);
});

gulp.task("watch-dist", ["build"], function() {
  "use strict";
  gulp.watch("./dist/*.html", browserSync.reload);
});

function simpleURLRewrite(req, res, next) {
  if (req.url === "/") {
    req.url = "/index";
  }
  if (req.url.indexOf(".") === -1) {
    req.url += ".html";
  }
  return next();
}

// Static server
gulp.task("browser-sync", ["fileinclude"], function() {
  browserSync.init({
    server: {
      baseDir: "./src/html-compiled/",
    },
    middleware: simpleURLRewrite,
  });
});

gulp.task("browser-sync-dist", ["build"], function() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    middleware: simpleURLRewrite,
  });
});

gulp.task("default", ["watch"]);

gulp.task("dist", ["watch-dist", "browser-sync-dist"]);
