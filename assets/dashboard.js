/**
 * abaaso
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2013 Jason Mulligan
 * @license BSD-3 <https://github.com/avoidwork/abaaso/blob/master/LICENSE>
 * @link https://github.com/avoidwork/abaaso
 * @module abaaso
 * @version 4.0.6
 */
(function ($) {
"use strict";

// Assets are loaded
$.on("render", function () {
	var obj = $(".g-plusone")[0];

	// Fixing Google Plus positioning (nice code Google!)
	if (obj !== undefined) {
		obj.parentNode.find("> div")[0].css("left", "auto")
	}
});

// DOM is ready
$.on("ready", function () {
	// Caching
	var download = $("a[data-section='download']")[0];

	// Tying download anchor to input fields
	$("input[name='package']").on("click", function () {
		download.attr("href", this.val()).attr("title", "Download " + this.data("type") + " version");
	});

	// Setting the version number
	$(".version")[0].html($.version);
});

}(abaaso));
