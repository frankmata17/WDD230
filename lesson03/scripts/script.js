document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navigation = document.querySelector('.navigation');

    if (hamburgerMenu && closeMenu && navigation) {
        hamburgerMenu.addEventListener('click', function () {
            navigation.classList.toggle('show');
            hamburgerMenu.style.display = 'none';
            closeMenu.style.display = 'block';
        });

        closeMenu.addEventListener('click', function () {
            navigation.classList.remove('show');
            hamburgerMenu.style.display = 'block';
            closeMenu.style.display = 'none';
        });
    }
});
