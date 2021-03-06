const gulp = require("gulp");
const livereload = require("gulp-livereload");
const shell = require("gulp-shell");
const a = "./views/**/*";
const b = "./public/**/*";
const c = "./src/**/*";
const d = "./src/**/*.scss";

gulp.task("live-1", () => {
	gulp.src(a)
		.pipe( livereload() );
});
gulp.task("live-2", () => {
	gulp.src(b)
		.pipe( livereload() );
});
gulp.task("live-3", () => {
	gulp.src(c)
		.pipe( livereload() );
});

gulp.task("run", shell.task(["sass"]));
gulp.task("ws", () => {
	gulp.watch(d, ["run"]);
});

gulp.task("live", () => {
	livereload.listen();
	
	gulp.watch(a, ["live-1"]);
	gulp.watch(b, ["live-2"]);
	gulp.watch(c, ["live-3"]);
	gulp.watch(d, ["live-4"]);
});
gulp.task("default", ["live"]);