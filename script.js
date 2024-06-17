
// Event listeners to handle clicks on the cards
document.querySelector('.option-card:nth-child(1)').addEventListener('click', function() {
    openPage('calculator.html');
});

document.querySelector('.option-card:nth-child(2)').addEventListener('click', function() {
    openPage('converters.html');
});

// Function to navigate to the specified page
function openPage(page) {
    window.location.href = page;
}
