const display = document.querySelector('.display');
const screen = {
  displayValue: '',
  operation: '',
  value: '',
  waitingForOperand: false,
};

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  negative: (a) => a * -1,
};

function inputNumbers() {
  const buttons = document.querySelectorAll('.item button');
  for (const button of buttons) {
    button.addEventListener('click', ({ target: { innerText } }) => {
      // this should eventually be a switch statement
      // const val = innerText;
      if (innerText === 'AC') {
        return clearDisplay();
      } else if (innerText === '.') {
        return inputDot();
      } else if (innerText === '+/-') {
        display.textContent = toggleSign();
      }
      display.textContent = addDigit(innerText);
    });
  }
}

function addDigit(digit) {
  screen.displayValue = screen.displayValue === '0' ? digit : screen.displayValue + digit;
  return screen.displayValue;
}


/* operation functions */
function toggleSign() {
  screen.displayValue = screen.displayValue * -1;
  return screen.displayValue;
}

function inputDot() {
  screen.displayValue += '.';
  display.textContent = screen.displayValue;
}

function clearDisplay() {
  screen.displayValue = '';
  screen.rightPart = '';
  screen.operation = '';
  display.textContent = 0;
}

inputNumbers();
