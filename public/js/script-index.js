'use strict';

$(document).ready(function() {
	var lists = $('li');
	console.log(lists);
	setTimeout(function() {
		lists.animate({
				opacity: '0'
			}, 1);
			lists.each(function(list) {
				lists.animate({
					top: '0',
					left: '0',
					opacity: '1'
				}, 3500)
			});
	});
});