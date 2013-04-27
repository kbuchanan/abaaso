/**
 * Sub-menu click handler
 * 
 * @param  {Object} e  Mouse event
 * @return {Undefined} undefined
 */
display = function (e) {
	$.stop(e);
	$.hash("wiki/" + $.target(e).data("filename"));
};
