$(document).ready(function () {
	function toggleScroll(e) {
		let img = $(e + "Top").find("img");
		let text = $(e + "Top").find(".card-title");

		//Let the magic begin
		$(e).toggleClass("hidden");

		//Check if we opening or closing it
		if ($(e).hasClass("hidden")) {
			$(e + "Button").text("More Info!");
			img.css("transform", "rotate(" + 0 + "deg)");
			img.css("max-height", "100%");
			img.css("max-width", "100%");
			text.css("font-size:", "1em");
			$("html, body").animate(
				{
					scrollTop: $(e + "Top").offset().top,
				},
				500
			);
		} else {
			$(e + "Button").text("Show Less");
			img.css("transform", "rotate(" + 25 + "deg)");
			img.css("max-height", "50px");
			img.css("max-width", "50px");
			text.css("font-size:", ".1em");
			$("html, body").animate(
				{
					scrollTop: $(e + "Top").offset().top,
				},
				500
			);
		}
	}

	$("#card1Button").click(function () {
		toggleScroll("#card1");
	});
	$("#card2Button").click(function () {
		toggleScroll("#card2");
	});
	$("#card3Button").click(function () {
		toggleScroll("#card3");
	});
	$("#card4Button").click(function () {
		toggleScroll("#card4");
	});
	$("#card5Button").click(function () {
		toggleScroll("#card5");
	});
	$("#card6Button").click(function () {
		toggleScroll("#card6");
	});
	$("#card7Button").click(function () {
		toggleScroll("#card7");
	});
	$("#card8Button").click(function () {
		toggleScroll("#card8");
	});
	$("#card9Button").click(function () {
		toggleScroll("#card9");
	});
	$("#card10Button").click(function () {
		toggleScroll("#card10");
	});
});
