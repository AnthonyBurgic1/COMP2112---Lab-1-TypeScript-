function calculate(): void {
    // get form inputs
    const xInput = document.getElementById('x') as HTMLInputElement;
    const yInput = document.getElementById('y') as HTMLInputElement;

    // output display
    const resultElement = document.getElementById('result') as HTMLParagraphElement;

    // get input values & convert to numbers
    const x: number = parseFloat(xInput.value);
    const y: number = parseFloat(yInput.value);

    // validate for #'s
    if (isNaN(x) || isNaN(y)) {
        resultElement.textContent = 'Please enter valid numbers';
    }
    else {
        resultElement.textContent = `Result: ${x + y}`;
    }
}