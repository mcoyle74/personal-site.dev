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
		solutions = $('.solutions ul'),
		total = 100,
		index = 1,
		operand = '1',
		nextDigit = 2,
		attemptCount = 0,
		userExpression = [],
		userAttempts = [],
		userSolutions = [],
		results;

	function getSolutions(total) {

		var ternaries = [],
			expressions = [],
			results = [],
			ternary,
			expression,
			result,
			nextDigit;
		
		for (var i = 0; i < 6561; i++) {

			ternary = i.toString(3);
			while (ternary.length < 8) {
				ternary = '0' + ternary;
			};
			ternaries.push(ternary);
				
		}

		ternaries.forEach(sequence => {

			expression = '1';
			nextDigit = 2;
			for (var i = 0; i < sequence.length; i++) {
				switch (sequence[i]) {
					case '2':
						expression += nextDigit++;
						break;
					case '1':
						expression += ' ' + nextDigit++;
						break;
					case '0':
						expression += ' -' + nextDigit++;
						break;
				};
			};
			expressions.push(expression.split(' '));
			
		});

		expressions.forEach(expression => {

			result = expression.reduce((a, b) => { 
				return parseInt(a) + parseInt(b);
			});
			if (result === total) {
				results.push(expression.join(' + ').replace(/ \+ -/g, ' - '));
			}

		});

		return results;
	}

	function insertOperator(index, op) {

		inputs.eq(index).removeClass('underlined');

		if (op === '+') {
			inputs.eq(index).attr('value', String.fromCharCode(43));
		} else if (op === '-') {
			inputs.eq(index).attr('value', String.fromCharCode(8722));
		} else {

			inputs.eq(index).animate({
				width: '0'
			}, 300);

			inputs.slice(index + 1).animate({
				left: '-=12'
			}, 300);

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

			if (userSolutions.includes(userExpression)) {

				message.addClass('info').text(
					"\u267b That solution is already found. Press reset to try again."
				);

			} else {

				userSolutions.push(userExpression);
				message.addClass('success').text(
					"\u2713 Success! You've found " + userSolutions.length + ' of ' + results.length + ' solutions.'
				);
				solutions.prepend(
					'<li>' + userExpression + ' = ' + expResult + '</li>'
				);
				$('.solutions>h2').text('Solutions (' + (userSolutions.length) + '):');

			}

		} else {

			userExpression = userExpression + ' = ' + expResult;
			if (userAttempts.includes(userExpression)) {
				message.addClass('info').text(
					'\u267b You tried that. Press reset to try again.'
				);
			} else {
				userAttempts.push(userExpression);
				message.addClass('fail').text(
					'\u2718 Sorry, that is not a solution. Press reset to try again.'
				);
				attempts.prepend('<li>' + userExpression + '</li>');
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

		if (index < 17) {
			message.removeClass().addClass('info').text('There are more choices.');
		} else if (index === 17 && Array.isArray(userExpression)) {
			userExpression.push(operand);
			displayExpressionResult(userExpression);
		} else {
			message.removeClass().addClass('fail').text('\u26d4 Please press reset to continue.');
		}

	});

	results = getSolutions(total);
});
