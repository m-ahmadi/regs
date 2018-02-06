$(function () {
	const sb = $("#sidebar");
	const sbSlim = $("#sidebar-slim");
	const sbContainer = $("#sidebar-container");
	const CLS = "uk-hidden";

	adjustWidth();

	$("#sidebar-toggle").on("click", function () {
		
		sb.toggleClass(CLS);
		sbSlim.toggleClass(CLS);
		adjustWidth();
	});


	function adjustWidth() {
		
		if ( sb.hasClass(CLS) ) {
			sbContainer.width("70px");
		} else if ( sbSlim.hasClass(CLS) ) {
			sbContainer.width("250px");
		}
		UIkit.update(event = "update");
	}

});