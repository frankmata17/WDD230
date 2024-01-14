// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright year in the footer's first paragraph
document.querySelector('footer p:first-child').innerHTML = `&copy; Francisco Mata ${currentYear} Utah`;

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Set the last modified date in the second paragraph with id "lastModified"
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModifiedDate}`;