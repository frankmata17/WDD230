document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

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
