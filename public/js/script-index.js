'use strict';

$(document).ready(function() {
	var lists = $('li');
	lists.animate({
		opacity: '0'
	}, 100);
	lists.each(function(list) {
		lists.animate({
			top: '0',
			left: '0',
			opacity: '1'
		}, 3000)
	});
});