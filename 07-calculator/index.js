const display = document.querySelector('.display');
const screen = {
  leftPart: '',
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
      const val = innerText; // the number we click
      screen.leftPart += val;
      // is the first press a .?
      display.textContent = screen.leftPart
    });
  }
}

inputNumbers();
