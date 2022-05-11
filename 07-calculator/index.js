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
      const val = innerText;
      if (val === 'AC') {
       return clearDisplay()
      }
      screen.displayValue = screen.displayValue ===  '0' ? val : screen.displayValue + val;
      display.textContent = screen.displayValue
    });
  }
}

inputNumbers();


function clearDisplay() {
  screen.displayValue = '';
  screen.rightPart = '';
  screen.operation = '';
  display.textContent = 0
}