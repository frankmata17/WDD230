document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.switch input');
    const elementsToToggle = ['body', 'header', 'footer', '.navigation'];

    // Function to toggle dark mode
    const toggleDarkMode = (isDarkMode) => {
        elementsToToggle.forEach(element => {
            document.querySelector(element).classList.toggle('dark-mode', isDarkMode);
        });
    };

    // Function to set dark mode state in local storage
    const setDarkModeState = (isDarkMode) => {
        localStorage.setItem('darkMode', isDarkMode);
    };

    // Check if dark mode is set in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode based on stored state
    toggleDarkMode(isDarkMode);
    darkModeToggle.checked = isDarkMode;

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('change', function () {
        const isDarkMode = darkModeToggle.checked;
        toggleDarkMode(isDarkMode);
        setDarkModeState(isDarkMode);
    });
});
