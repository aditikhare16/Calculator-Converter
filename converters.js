function openConverter(converterId) {
    const converters = document.getElementsByClassName('converter');
    for (let i = 0; i < converters.length; i++) {
        converters[i].style.display = 'none';
    }
    document.getElementById(converterId).style.display = 'block';
}

function convertTime() {
    const inputTime = document.getElementById('input-time').value;
    const fromTimezone = document.getElementById('from-timezone').value;
    const toTimezone = document.getElementById('to-timezone').value;

    if (!inputTime) {
        document.getElementById('output-time').textContent = 'Please enter a valid date and time.';
        return;
    }

    const date = luxon.DateTime.fromISO(inputTime, { zone: fromTimezone });
    const convertedTime = date.setZone(toTimezone).toLocaleString(luxon.DateTime.DATETIME_FULL);
    document.getElementById('output-time').textContent = `Converted Time: ${convertedTime}`;
}

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('input-amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount)) {
        document.getElementById('output-amount').textContent = 'Please enter a valid amount.';
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = amount * rate;
        document.getElementById('output-amount').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById('output-amount').textContent = 'Error converting currency. Please try again later.';
    }
}

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('input-temperature').value);
    const fromUnit = document.getElementById('from-temperature').value;
    const toUnit = document.getElementById('to-temperature').value;

    if (isNaN(temperature)) {
        document.getElementById('output-temperature').textContent = 'Please enter a valid temperature.';
        return;
    }

    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = temperature;
    } else if (fromUnit === 'C') {
        convertedTemperature = toUnit === 'F' ? (temperature * 9/5) + 32 : temperature + 273.15;
    } else if (fromUnit === 'F') {
        convertedTemperature = toUnit === 'C' ? (temperature - 32) * 5/9 : (temperature + 459.67) * 5/9;
    } else if (fromUnit === 'K') {
        convertedTemperature = toUnit === 'C' ? temperature - 273.15 : (temperature * 9/5) - 459.67;
    }

    document.getElementById('output-temperature').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
