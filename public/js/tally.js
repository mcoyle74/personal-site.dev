'use strict';

function addNextTally() {

	if (tallyCount() % 5 === 0) {

		addTallyGroup();
		addTallyMark();

	} else {

		tallyCount() % 5 === 4 ? (
			addTallyCross()
		) : (
			addTallyMark()
		);

	}

}

function addTallyGroup() {
	$('.container').first().append('<div class="tally-group"></div>');
}

function addTallyMark() {
	$('.tally-group').last().append('<div class="tally mark"></div>');
}

function addTallyCross() {
	$('.tally-group').last().append('<div class="tally cross"></div>');
}

function tallyCount() {
	return $('.tally').length;
}
