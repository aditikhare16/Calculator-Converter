
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
// dark mode
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
