let currentInput = '';
let display = document.getElementById('display');

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput;
}

