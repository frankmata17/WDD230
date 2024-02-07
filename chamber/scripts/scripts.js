document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const darkModeToggle = document.querySelector('.switch input');
    const navigationMenu = document.querySelector('.navigation');

    darkModeToggle.addEventListener('change', function () {
        const isDarkMode = darkModeToggle.checked;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.querySelector('header').classList.toggle('dark-mode', isDarkMode);
        document.querySelector('footer').classList.toggle('dark-mode', isDarkMode);
        navigationMenu.classList.toggle('dark-mode', isDarkMode);
    });


    menuButton.addEventListener('click', function () {
        navigation.classList.toggle('show-menu');
        menuButton.classList.toggle('open');
    });

    // Close the menu if a navigation link is clicked
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navigation.classList.remove('show-menu');
            menuButton.classList.remove('open');
        });
    });
});
