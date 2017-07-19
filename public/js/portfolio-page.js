"use strict";

$(document).ready(function() {

	var headerImg = $('#header-img'),
		imgTall = '/img/subway-portrait.jpg',
		imgWide = '/img/subway.jpg'

	if ($(window).width() > $(window).height()) {
		headerImg.attr('src', imgWide);
	};

	$(window).resize(function() {
 // || $(window).width() < 768
		if ($(window).width() < $(window).height()) {

			headerImg.attr('src', imgTall);

		} else {

			headerImg.attr('src', imgWide);

		};	

	});

});
