const display = document.querySelector('.display');
const screen = {
  displayValue: '',
  operation: '',
  rightPart: '',
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
      const val = innerText;
      if (val === 'AC') {
       return clearDisplay()
      }

      if (val === '.') {
        return inputDot();
      }
      if (val === '+/-') {
        display.textContent = toggleSign();

      } else {
      screen.displayValue = screen.displayValue ===  '0' ? val : screen.displayValue + val;
      display.textContent = screen.displayValue
      }
    });
  }
}





inputNumbers();

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
  display.textContent = 0
}