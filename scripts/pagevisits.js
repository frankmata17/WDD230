document.addEventListener('DOMContentLoaded', function () {
    const visitsElement = document.querySelector('.card2 li.visits');

    // Increment the page visit count
    let visits = localStorage.getItem('visits') || 0;
    visits++;
    localStorage.setItem('visits', visits);

    // Display the number of visits
    visitsElement.innerHTML = `Page Visits: ${visits}`;
});