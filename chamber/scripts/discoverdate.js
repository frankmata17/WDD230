document.addEventListener('DOMContentLoaded', function () {
    const lastVisit = localStorage.getItem('lastVisit');
    const sidebar = document.querySelector('.sidebar');

    if (!lastVisit) {
        // First visit
        prependMessage(sidebar, 'Welcome! Let us know if you have any questions.');
    } else {
        const timeSinceLastVisit = Math.floor((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));

        if (timeSinceLastVisit < 1) {
            // Less than a day
            prependMessage(sidebar, 'Back so soon! Awesome!');
        } else {
            // More than a day
            prependMessage(sidebar, `You last visited ${timeSinceLastVisit} ${timeSinceLastVisit === 1 ? 'day' : 'days'} ago.`);
        }
    }

    // Save current date in milliseconds to localStorage
    localStorage.setItem('lastVisit', Date.now());

    function prependMessage(parentElement, message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('current-date-message-container');

        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = message;

        messageContainer.appendChild(messageParagraph);
        parentElement.insertBefore(messageContainer, parentElement.firstChild);
    }
});
