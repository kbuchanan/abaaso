/**
 * Gets or sets the copy of a section
 * 
 * @param  {String} arg Section
 * @return {Undefined}  undefined
 */
copy = function (arg) {
	var obj = $("#" + arg + " section.markdown")[0];

	if (obj !== undefined) {
		if (!content.hasOwnProperty(arg)) {
			content[arg] = obj.html();
		}
		else {
			obj.html(content[arg]);
		}
	}
};
