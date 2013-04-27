listeners = function () {
	var download = $("a[data-section='download']")[0];

	// Page Navigation
	$("a.section").on("click", function (e) {
		var data;

		// Using history.pushHistory() if available
		if (push) {
			$.stop(e);

			data = this.data("section");
			history.pushState({section: data}, this.textContent, this.href);
			section(data);
		}
	}, "section");

	// Sub-section Navigation
	$("section.list a").on("click", function (e) {
		$.stop(e);

		display(e);
	}, "display");

	// Tying download anchor to input fields
	$("input[name='package']").on("click", function () {
		download.attr("href", this.val()).attr("title", "Download " + this.data("type") + " version");
	}, "download");
};
