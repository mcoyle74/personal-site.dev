'use strict';

$(document).ready(function() {

	var	digits = $('.digit'),
		inputs = $('input'),
		ops = $('.operator'),
		opWidth = inputs.filter('.operator').css('width'),
		concatBtn = $('#concat'),
		plusBtn = $('#plus'),
		minusBtn = $('#minus'),
		resetBtn = $('#reset'),
		equalsBtn = $('#equals'),
		message = $('#message'),
		solutions = $('.solution'),
		total = 100,
		index = 1,
		operand = '1',
		nextDigit = 2,
		userExpression = [],
		userSolutions = [],
		ternaries = [],
		expressions = [],
		ternary,
		expression,
		results;

	function insertOperator(index, op) {

		inputs.eq(index).removeClass('underlined');

		if (op === '+') {
			inputs.eq(index).attr('value', String.fromCharCode(43));
		} else if (op === '-') {
			inputs.eq(index).attr('value', String.fromCharCode(8722));
		} else {

			inputs.eq(index).animate({
				width: '0'
			}, 500);

			inputs.slice(index + 1).animate({
				left: '-=12'
			}, 500);

		}

		inputs.eq(index + 2).addClass(
			'underlined'
		);
	}

	concatBtn.click(function() {

		if (index <= 15) {
			insertOperator(index, 'concat');
			operand += nextDigit++;
			index += 2;
		}

	});

	plusBtn.click(function() {

		if (index <= 15) {
			insertOperator(index, '+');
			userExpression.push(operand);
			operand = (nextDigit++).toString();
			index += 2;
		}

	});

	minusBtn.click(function() {

		if (index <= 15) {
			insertOperator(index, '-');
			userExpression.push(operand);
			operand = '-' + nextDigit++;
			index += 2;
		}

	});

	resetBtn.click(function() {

		inputs.removeAttr('style');
		inputs.slice(-2).addClass('hidden');
		ops.removeAttr('value');
		ops.slice(1).removeClass('underlined');
		ops.first().addClass('underlined');
		message.removeClass().addClass('hidden');
		userExpression = [];
		index = 1;
		operand = '1';
		nextDigit = 2;

	});

	equalsBtn.click(function() {

		userExpression.push(operand);
		message.removeClass('hidden');
		inputs.slice(-2).removeClass('hidden underlined');
		inputs.last().attr(
			'value', userExpression.reduce(function(a, b) {
				return parseInt(a) + parseInt(b);
			})
		);

		userExpression = userExpression.join(' + ').replace(/\+ -/g, '- ');
		console.log(userExpression);

		if (results.includes(userExpression)) {

			userSolutions.push(userExpression);
			message.addClass('success').text(String.fromCharCode(10003) + ' Success!');
			solutions.eq(
				userSolutions.length - 1
			).removeClass(
				'hidden'
			).text(
				userExpression + ' = ' + total
			);

		} else {

			message.addClass('info').text(
				String.fromCharCode(10007) + ' Sorry, that is not a solution. Press reset to try again.'
			);
		}

	});

	for (var i = 0; i < 6561; i++) {

		ternary = i.toString(3);

		while (ternary.length < 8) {
			ternary = '0' + ternary;
		};

		ternaries.push(ternary);
			
	}

	ternaries.forEach(sequence => {

		expression = '';
		
		for (var i = 0; i < sequence.length; i++) {

			if (sequence[i] == 0) {
				expression += i + 1;
			} else if (sequence[i] == 1) {
				expression += (i + 1) + ' -';
			} else {
				expression += (i + 1) + ' ';
			};

		};

		expression += '9';
		expressions.push(expression.split(' '));
		
	});

	results = expressions.filter(expression => {

		return expression.reduce((a, b) => {
			return parseInt(a) + parseInt(b);
		}) === total;

	}).map(result => {

		return result.map((value, i, arr) => {

			if (i === 0) {
				return value;
			} else if (Math.sign(value) === 1) {
				return ' + ' + Math.abs(value);
			} else {
				return ' - ' + Math.abs(value);
			}

		});

	}).map(result => {
		return result.join('');
	});

	results.forEach(result => {
		console.log(result + ' = ' + total);
	});

});
