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
		attempts = $('.attempts ul'),
		solutions = $('.solution'),
		total = 100,
		index = 1,
		operand = '1',
		nextDigit = 2,
		attemptCount = 0,
		userExpression = [],
		userAttempts = [],
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

	function displayExpressionResult(expressionArray) {

		var expResult = userExpression.reduce(function(a, b) {
				return parseInt(a) + parseInt(b);
		});
		message.removeClass('hidden');
		inputs.slice(-2).removeClass('hidden underlined');
		inputs.last().attr(
			'value', expResult.toString()
		);

		userExpression = userExpression.join(' + ').replace(/\+ -/g, '- ');

		if (results.includes(userExpression)) {

			userSolutions.push(userExpression);
			message.addClass('success').text(String.fromCharCode(10003) + ' Success!');
			solutions.eq(
				userSolutions.length - 1
			).removeClass(
				'hidden'
			).text(
				userExpression + ' = ' + expResult
			);
			$('.solutions>h2').text('Solutions (' + (userSolutions.length) + '):');

		} else {

			if (userAttempts.includes(userExpression)) {
				message.addClass('info').text(
					'You already tried that. Press reset to try something else.'
				);
			} else {
				userAttempts.push(userExpression + ' = ' + expResult);
				message.addClass('fail').text(
					String.fromCharCode(10007) + ' Sorry, that is not a solution. Press reset to try again.'
				);
				attempts.prepend('<li>' + userExpression + ' = ' + expResult + '</li>');
				$('.attempts>h2').text('Attempts (' + (++attemptCount) + '):');
			}

		}
		
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
		displayExpressionResult(userExpression);

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

});
