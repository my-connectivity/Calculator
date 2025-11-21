let display = document.getElementById('display');
let currentInput = '';

function appendNumber(value) {
  // If the display shows 'Error', reset everything
  if (display.value === 'Error') {
    display.value = '';
    currentInput = '';
  }

  // Handle percentage calculation when "%" button is clicked
  if (value === '%') {
    try {
      if (currentInput === '') {
        display.value = '0';
        return;
      }

      // Operators list
      let operators = ['+', '-', '*', '/'];
      let operator = '';
      let operatorIndex = -1;

      // Finding last operator
      for (let i = currentInput.length - 1; i >= 0; i--) {
        if (operators.includes(currentInput[i])) {
          operator = currentInput[i];
          operatorIndex = i;
          break;
        }
      }

      // If no operator was found, it's an error
      if (operatorIndex === -1) {
        display.value = 'Error';
        currentInput = '';
        return;
      }

      // Get the number before the operator
      let num1 = parseFloat(currentInput.slice(0, operatorIndex));

      // Get the number after the operator
      let num2 = parseFloat(currentInput.slice(operatorIndex + 1));

      // If either number is invalid, show error
      if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        currentInput = '';
        return;
      }

      // Percentage calculation
      let percentage = (num2 / 100) * num1;
      currentInput = num1 + operator + percentage;
      display.value = currentInput;
    } catch (error) {
      display.value = 'Error';
      currentInput = '';
    }
    return;
  }

  // Get last character
  let lastChar = currentInput.slice(-1);

  // Don't allow double operators (like ++, +-, etc.)
  let operators = ['+', '-', '*', '/'];
  if (operators.includes(value) && operators.includes(lastChar)) {
    // Replace the last operator with new one (simple fix)
    currentInput = currentInput.slice(0, -1) + value;
    display.value = currentInput;
    return;
  }

  // Handle brackets
  if (value === '(' || value === ')') {
    // Allow brackets at start or after operator
    if (value === '(' && (currentInput === '' || operators.includes(lastChar) || lastChar === '(')) {
      // Allow opening bracket
      currentInput += value;
      display.value = currentInput;
      return;
    }
    if (value === ')' && (lastChar === ')' || !currentInput.includes('('))) {
      // Don't allow closing if unbalanced or no opening
      return;
    }
    // For closing bracket, simple check if there's an opening one
    if (value === ')' && currentInput.includes('(')) {
      currentInput += value;
      display.value = currentInput;
      return;
    }
  }

  // Don't allow multiple dots in the same number
  if (value === '.' && lastChar === '.') {
    // Don't add another dot
    return;
  }
  if (value === '.' && operators.includes(lastChar)) {
    // Allow dot after operator (starts new number)
    currentInput += value;
    display.value = currentInput;
    return;
  }
  if (value === '.' && !operators.includes(lastChar) && currentInput.includes('.')) {
    // Check if there's already a dot after last operator
    let lastOperatorIndex = -1;
    for (let i = currentInput.length - 1; i >= 0; i--) {
      if (operators.includes(currentInput[i])) {
        lastOperatorIndex = i;
        break;
      }
    }
    if (lastOperatorIndex !== -1) {
      let afterOperator = currentInput.slice(lastOperatorIndex + 1);
      if (afterOperator.includes('.')) {
        // Already has dot, don't add
        return;
      }
    }
  }

  // Normal number or operator input
  if (currentInput.length < 20) {
    currentInput += value;
    display.value = currentInput;
  }
}


// Clears everything
function clearDisplay() {
  currentInput = '';
  display.value = '0';
}

// Deletes the last character (like DEL button)
function deleteLast() {
  if (currentInput === '' || display.value === 'Error') {
    display.value = '0';
    currentInput = '';
    return;
  }
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput || '0';
}

// Calculates the square root (√ button)
function calculateSquareRoot() {
  try {
    if (currentInput === '') {
      display.value = '0';
      return;
    }

    // Convert input to a number
    let number = parseFloat(currentInput);

    // If number is negative, show error
    if (number < 0) {
      display.value = 'Error';
      currentInput = '';
      return;
    }

    // Get square root
    let result = Math.sqrt(number);

    // Show the result and update input
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}

// Calculates the full expression (= button)
function calculate() {
  try {
    if (currentInput === '') {
      display.value = '0';
      return;
    }

    // Evaluate the full expression
    let result = eval(currentInput);
    if (result === Infinity || isNaN(result)) {
      display.value = 'Error';
      currentInput = '';
      return;
    }

    // Show the result and save it as new input
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}

// Keyboard input support - simple beginner way
document.addEventListener('keydown', function(event) {
  // Numbers 0-9
  if (event.key >= '0' && event.key <= '9') {
    appendNumber(event.key);
  }
  // Operators
  else if (event.key === '+' || event.key === '-' || event.key === '*') {
    appendNumber(event.key);
  }
  else if (event.key === '/') {
    appendNumber('/');
  }
  // Decimal point
  else if (event.key === '.') {
    appendNumber('.');
  }
  // Equals / Calculate
  else if (event.key === '=' || event.key === 'Enter') {
    event.preventDefault(); // Prevent default Enter behavior
    calculate();
  }
  // Clear
  else if (event.key === 'Escape') {
    clearDisplay();
  }
  // Delete / Backspace
  else if (event.key === 'Backspace') {
    deleteLast();
  }
  // Percentage
  else if (event.key === '%') {
    appendNumber('%');
  }
  // Square root (using 'r' key for simplicity)
  else if (event.key === 'r' || event.key === 'R') {
    calculateSquareRoot();
  }
  // Brackets
  else if (event.key === '(') {
    appendNumber('(');
  }
  else if (event.key === ')') {
    appendNumber(')');
  }
});