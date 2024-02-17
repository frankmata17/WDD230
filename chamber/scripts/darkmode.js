document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.switch input');
    const elementsToToggle = ['body', 'header', 'footer', '.navigation'];

    darkModeToggle.addEventListener('change', function () {
        const isDarkMode = darkModeToggle.checked;
        elementsToToggle.forEach(element => {
            document.querySelector(element).classList.toggle('dark-mode', isDarkMode);
        });
    });
});
