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
document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calculator-display');
    const buttons = document.querySelectorAll('.calculator-buttons button');
    const operators = ['+', '-', '*', '/'];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleInput(button.innerText);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (isNumber(key) || operators.includes(key) || key === '.' || key === 'Enter' || key === 'Backspace' || key === 'Escape') {
            event.preventDefault();
            handleInput(key);
        }
    });

    function handleInput(input) {
        let currentDisplay = display.value;

        if (input === 'Enter' || input === '=') {
            try {
                display.value = eval(currentDisplay);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (input === 'Backspace') {
            display.value = currentDisplay.slice(0, -1);
        } else if (input === 'Escape' || input === 'C') {
            display.value = '';
        } else {
            display.value += input;
        }
    }

    function isNumber(value) {
        return !isNaN(value) && value.trim() !== '';
    }
});
