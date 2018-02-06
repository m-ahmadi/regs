const fs = require("fs");
const glob = require("glob");
const strs = [
	"uk-icon",
	"uk-grid",
	"uk-sticky",
	"uk-nav",
	"uk-drop",
	"uk-tooltip",
	"uk-parallax",
	"uk-cover",
	"uk-svg",
	"uk-slideshow-parallax",
	"uk-slideshow-item",
	"uk-slidenav-previous",
	"uk-slidenav-next"
];
const filePaths = glob.sync("views/**/*.hbs");
filePaths.forEach(path => {
	const c = fs.readFileSync(path, "utf-8");
	let result = "";
	strs.forEach(str => {
		const targ = result || c;
		const rgx = new RegExp(str, "g")
		result = targ.replace(rgx, `data-${str}`);
	});
	fs.writeFileSync(path, result);
});