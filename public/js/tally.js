'use strict';

function addNextTally() {

	if ($('.tally').length % 5 === 0) {

		$('.container').first().append('<div class="tally-group"></div>');
		$('.tally-group').last().append('<div class="tally mark"></div>');

	} else {

		$('.tally').length % 5 === 4 ? (
			$('.tally-group').last().append('<div class="tally cross"></div>')
		) : (
			$('.tally-group').last().append('<div class="tally mark"></div>')
		);

	}

}
