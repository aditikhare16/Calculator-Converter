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
(function() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    toggleButton.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
})();
