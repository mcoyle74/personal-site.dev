(function() {

"use strict";

var clearButton = document.getElementById('clear');
var plusminusButton = document.getElementById('equals');
var percentButton = document.getElementById('equals');
var pointButton = document.getElementById('point');
var equalsButton = document.getElementById('equals');
var operatorPressed = false;

var display = {
	inputLeft: document.getElementById('input-1'),
	inputCenter: document.getElementById('input-2'),
	inputRight: document.getElementById('input-3'),
	operandLeft: '',
	operandRight: '',
	operator: '',
	output:	function() {
		this.inputLeft.value = this.operandLeft;
		this.inputCenter.value = this.operator;
		this.inputRight.value = this.operandRight;
	},
	clear: function() {
		display.inputLeft.value = '';
		display.inputCenter.value = '';
		display.inputRight.value = '';
		display.operandLeft = '';
		display.operandRight = '';
		display.operator = '';
		operatorPressed = false;
	},
	answer: function () {
		var calculation;
		if ((display.operator == '/') && (display.operandRight != 0)) {
			calculation = parseFloat(display.operandLeft) / parseFloat(display.operandRight);
			display.operandLeft = calculation;
			display.output();
		} else if (display.operator == '*') {
			calculation = parseFloat(display.operandLeft) * parseFloat(display.operandRight);
			display.operandLeft = calculation;
			display.output();
		} else if (display.operator == '+') {
			calculation = parseFloat(display.operandLeft) + parseFloat(display.operandRight);
			display.operandLeft = calculation;
			display.output();
		} else if (display.operator == '-') {
			calculation = parseFloat(display.operandLeft) - parseFloat(display.operandRight);
			display.operandLeft = calculation;
			display.output();
		} else {
			display.inputLeft.value = "Error";
		}
	}
};

var processOperands = function () {
	if (display.operator == '') { 
		if (this.value == '.') {
			pointButton.removeEventListener('click', processOperands);
		}
		display.operandLeft += this.value;
		display.output();
	} else {
		if (this.value == '.') {
			pointButton.removeEventListener('click', processOperands);
		}
		display.operandRight += this.value;
		display.output();
	}
}

var processOperators = function() {
	if (operatorPressed == false) {
		display.operator = this.value;
		display.operandRight = '';
		if (display.operator == '%') {
			display.operandLeft *= 0.01;
		} else if (display.operator == '+-') {
			display.operandLeft *= -1;
		}
	} else {
		display.operator = this.value;
		display.answer();
		if (display.operator == '%') {
			display.operandRight *= 0.01;
		} else if (display.operator == '+-') {
			display.operandRight *= -1;
		}
	}
	display.operandRight = '';
	display.output();
	operatorPressed = true;
	pointButton.addEventListener('click', processOperands);
}

clearButton.addEventListener('click', display.clear, false);
plusminusButton.addEventListener('click', display.processOperands, false);
percentButton.addEventListener('click', display.processOperands, false);

var digitButtonPush = document.getElementsByClassName('digit', false);
console.log(digitButtonPush);
for (var i = 0; i < digitButtonPush.length; i++) {
	digitButtonPush[i].addEventListener('click', processOperands, false);
}

var operatorButtonPush = document.getElementsByClassName('operators')
for (var i = 0; i < operatorButtonPush.length; i++) {
	operatorButtonPush[i].addEventListener('click', processOperators, false);
}

equalsButton.addEventListener('click', display.answer, false);

}());