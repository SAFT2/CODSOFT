
let display = document.getElementById('display');
let currentInput = '';
let firstNumber = null;
let operation = null;

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  firstNumber = parseFloat(currentInput);
  operation = op;
  display.textContent = `${firstNumber} ${operation}`;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  firstNumber = null;
  operation = null;
  display.textContent = '0';
}

function updateDisplay() {
  if (currentInput) {
    display.textContent = currentInput;
  } else if (firstNumber !== null && operation) {
    display.textContent = `${firstNumber} ${operation}`;
  } else {
    display.textContent = '0';
  }
}

function calculate() {
  if (firstNumber === null || operation === null || currentInput === '') {
    display.textContent = 'Error';
    return;
  }

  const secondNumber = parseFloat(currentInput);
  let result;

  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else if (operation === '×') {
    result = firstNumber * secondNumber;
  } else if (operation === '÷') {
    if (secondNumber === 0) {
      display.textContent = 'Error: ÷ by 0';
      return;
    }
    result = firstNumber / secondNumber;
  }

  result = Math.round(result * 100) / 100; // Round to 2 decimal places
  display.textContent = result;
  currentInput = result.toString();
  firstNumber = null;
  operation = null;
}
