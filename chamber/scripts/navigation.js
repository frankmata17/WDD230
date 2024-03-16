document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    // Function to toggle the menu
    const toggleMenu = () => {
        navigation.classList.toggle('show'); // Change to 'show'
        menuButton.classList.toggle('show'); // Add this line to toggle the menu button
        const isOpen = navigation.classList.contains('show');
        menuButton.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    };

    // Event listener for the menu button
    menuButton.addEventListener('click', toggleMenu);

    // Event listener for navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navigation.classList.remove('show');
            menuButton.classList.remove('show'); // Add this line to remove 'show' class from the menu button
            menuButton.innerHTML = '&#9776;';
        });
    });
});
