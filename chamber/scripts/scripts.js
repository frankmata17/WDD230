// your-script.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const lastModifiedElement = document.getElementById('lastModified');

    // Function to get the last modified date
    function getLastModifiedDate() {
        const lastModified = new Date(document.lastModified);
        return lastModified.toDateString();
    }

    // Update the last modified date on page load
    lastModifiedElement.textContent = 'Last Modified: ' + getLastModifiedDate();

    // Event listener for the menu toggle
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });
});
