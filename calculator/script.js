const NUMBEROFDIGITS = 10;

const operatorDisplay = document.getElementById('display');
const operandDisplay = document.getElementById('display');
const resultDisplay = document.getElementById('display');

let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let previousOperator = null;


function add(num1, num2) {
	return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
	return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
	return Number(num1) * Number(num2);
}

function divide(num1, num2) {
	return (num2 == 0 && num1 != 0) ? "UNDEFINED" : (num1 / num2);
}

function operate(num1, num2, operator) {
	if (operator === "add") {
		return add(num1, num2);
	} else if (operator === "subtract") {
		return subtract(num1, num2);
	} else if (operator === "multiply") {
		return multiply(num1, num2);
	} else if (operator === "divide") {
		return divide(num1, num2);
	}
}

function initOperation(operator) {
	previousOperator = operator;

	firstOperand = Number(operandDisplay.textContent);
	operandDisplay.textContent = '';

	if (operator === 'add') {
		operatorDisplay.textContent = '+';
	} else if (operator === 'subtract') {
		operatorDisplay.textContent = '-';
	} else if (operator === 'multiply') {
		operatorDisplay.textContent = 'x';
	} else if (operator === 'divide') {
		operatorDisplay.textContent = '÷';
	}
}

function displayOperand(number) {
	if (operandDisplay.textContent === '+'|| operandDisplay.textContent === '-' || operandDisplay.textContent ==='x'|| operandDisplay.textContent ==='÷') {
		operandDisplay.textContent = number;
	} else {
		operandText = operandDisplay.textContent.length;
	if (operandText < NUMBEROFDIGITS) {
		operandDisplay.textContent += number;
	}
	} return;
}

function compute() {
	if (previousOperator === null) {
		resultDisplay.textContent = result = firstOperand = operandDisplay.textContent;
	} else {
		secondOperand = operandDisplay.textContent;
		
		let result = operate(firstOperand, secondOperand, previousOperator);
		resultDisplay.textContent = firstOperand = result;
	}
}

function allClear() {
	firstOperand = secondOperand = result = 0;
	previousOperator = null;

	resultDisplay.textContent = operandDisplay.textContent = operatorDisplay.textContent = '';
}

function delete_last() {
	operandDisplay.textContent = ''
}

window.onload = function addNumberListeners() {
	for (let i = 0; i < 10; i++) {
		let numString = i + '';

		document.getElementById(numString).addEventListener('click', function () {
			displayOperand(i);
		});
	}

	document.getElementById('period').addEventListener('click', function () {
		if (operandDisplay.textContent.includes('.')) {
			return;
		} displayOperand('.');
	});
}

const buttonPlus = document.getElementById('plus').addEventListener('click', function () {
	initOperation('add');
});

const buttonMinus = document.getElementById('minus').addEventListener('click', function () {
	initOperation('subtract');
});
const buttonTimes = document.getElementById('times').addEventListener('click', function () {
	initOperation('multiply');
});
const buttonDivided = document.getElementById('divided').addEventListener('click', function () {
	initOperation('divide');
});

const buttonEquals = document.getElementById('equals').addEventListener('click', compute);

const buttonClear = document.getElementById('clear').addEventListener('click', allClear);
const buttonDelete = document.getElementById('delete').addEventListener('click', delete_last);