// calculator app

const display = document.getElementById("display");

function appendToDisplay(input) {
  if (input === '+/-') {
    toggleSign();
  } else if (input === '%') {
    percentage();
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Replace the '×' and '÷' symbols with '*' and '/'
    let result = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    display.value = eval(result);
  } catch {
    display.value = 'Error';
  }
}

function toggleSign() {
  if (display.value.charAt(0) === '-') {
    display.value = display.value.slice(1);
  } else if (display.value !== '') {
    display.value = '-' + display.value;
  }
}

function percentage() {
  if (display.value !== '') {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}
