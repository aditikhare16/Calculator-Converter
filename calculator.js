function pressNumber(num) {
    document.getElementById('calculator-display').value += num;
}

function pressOperator(op) {
    document.getElementById('calculator-display').value += ' ' + op + ' ';
}

function pressDecimal() {
    document.getElementById('calculator-display').value += '.';
}

function clearDisplay() {
    document.getElementById('calculator-display').value = '';
}

function calculate() {
    const display = document.getElementById('calculator-display').value;
    try {
        const result = eval(display);
        document.getElementById('calculator-display').value = result;
    } catch (e) {
        document.getElementById('calculator-display').value = 'Error';
    }
}
