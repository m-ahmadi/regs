const gulp = require("gulp");
const livereload = require("gulp-livereload");
const a = "./**/*.hbs";
const b = "./**/*.css";
const c = "./**/*.js";

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
gulp.task("live", () => {
	livereload.listen();
	
	gulp.watch(a, ["live-1"]);
	gulp.watch(b, ["live-2"]);
	gulp.watch(c, ["live-3"]);
});
gulp.task("default", ["live"]);