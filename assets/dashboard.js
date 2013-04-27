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
"use asm";

var REGEX_SECTIONS = /^(api|main|tutorials)$/,
    REGEX_URI      = /.*\/|\.html/g,
    html           = $("html")[0],
    sections       = [],
    content        = {},
    current        = "main",
    api, copy, converter, display, hash, section, tutorials;

// Setting tabs as 4 spaces
hljs.tabReplace = "    "; 

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

/**
 * Loads the hash if it's a valid submenu item
 * 
 * @return {Undefined} undefined
 */
hash = function () {
	var arg   = $.hash(),
	    valid = ($("section.active a[data-filename='" + arg.replace(/^wiki\//, "") + "']").length > 0),
	    obj;

	if (!arg.isEmpty() && valid) {
		obj = $("section.active section.markdown")[0];
		obj.clear().addClass("loading").get(arg, function (arg) {
			obj.removeClass("loading").html(converter.makeHtml(arg));
			obj.find("pre code").each(function (i) {
				hljs.highlightBlock(i);
			});
		}, function (e) {
			obj.removeClass("loading").html("<h1>" + $.label.error.serverError + "</h1>");
		});
	}
};

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
	converter    = new Showdown.converter();
	sections     = $("article > section");
	var download = $("a[data-section='download']")[0];

	// HTML5 history API is available
	if (html.hasClass("history")) {
		// Setting back button listener
		$.on(window, "popstate", function (e) {
			var parsed = $.parse(location.href),
			    page   = parsed.pathname.replace(REGEX_URI, "");

			if (page.isEmpty()) {
				page = "main";
			}

			$.stop(e);

			section(e.state !== null ? e.state.section : page);
			current = page;
			copy(current);

			if (!parsed.hash.isEmpty()) {
				hash();
			}
		}, "history");

		// Page Navigation
		$("a.section").on("click", function (e) {
			var data;

			$.stop(e);

			data = this.data("section");
			history.pushState({section: data}, this.textContent, this.href);
			section(data);
		});
	}

	// Hash API is available
	if (html.hasClass("hashchange")) {
		// Looking for hashbangs
		if ($.client.opera || !html.hasClass("history")) {
			$.on("hash", function (arg) {
				if (!arg.isEmpty()) {
					hash();
				}
			}, "wiki");
		}

		// Changing sub-menu items to use a hashbang
		$("section.list a").each(function (i) {
			i.attr("href", "#!/wiki/" + i.data("filename"));
		});

		// Explicitly loading hash for all browsers
		if (!$.parse(location.href).hash.isEmpty()) {
			hash();
		}
	}

	// Tying download anchor to input fields
	$("input[name='package']").on("click", function () {
		download.attr("href", this.val()).attr("title", "Download " + this.data("type") + " version");
	});

	// Setting the version number
	$(".version")[0].html($.version);
});

}(abaaso));
