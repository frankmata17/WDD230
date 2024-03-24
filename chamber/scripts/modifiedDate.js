document.addEventListener('DOMContentLoaded', function () {
    // Get the last modified date of the current document
    const lastModifiedDate = new Date(document.lastModified);
    
    // Format the date and time
    const formattedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
    
    // Update the #lastModified element
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.innerHTML = ` | Last Modified: <span style="margin-left: 10px;">${formattedDate}</span>`;
});
