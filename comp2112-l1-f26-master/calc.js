"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate() {
    // get form inputs
    const xInput = document.getElementById('x');
    const yInput = document.getElementById('y');
    // output display
    const resultElement = document.getElementById('result');
    // get input values & convert to numbers
    const x = parseFloat(xInput.value);
    const y = parseFloat(yInput.value);
    // validate for #'s
    if (isNaN(x) || isNaN(y)) {
        resultElement.textContent = 'Please enter valid numbers';
    }
    else {
        resultElement.textContent = `Result: ${x + y}`;
    }
}
//# sourceMappingURL=calc.js.map