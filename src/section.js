/**
 * Toggles the visible section
 * 
 * @param  {String} arg Section to view
 * @return {Undefined}  undefined
 */
section = function (arg) {
	var obj;

	if (!REGEX_SECTIONS.test(arg)) {
		location.href = "/";
	}

	sections.removeClass("active").addClass("hidden");
	obj = $("#" + current + " section.markdown")[0];

	if (obj !== undefined) {
		obj.html(content[current]);
	}

	$("#" + arg).addClass("active").removeClass("hidden");
};
