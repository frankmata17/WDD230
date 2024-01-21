// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright year and name in the footer's first paragraph
document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} Francisco D. Mata Utah`;

const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModifiedDate}`;
