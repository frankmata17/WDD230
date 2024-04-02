// rentals.js

document.addEventListener("DOMContentLoaded", function() {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            populateTable(data.rentals, 'rentalTable');
        })
        .catch(error => console.error('Error fetching rentals data:', error));
});

function populateTable(rentals, tableId) {
    const tableBody = document.getElementById(tableId);
    
    rentals.forEach(rental => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rental.type}</td>
            <td>${rental.persons}</td>
            <td>${rental.halfDay.reservation}</td>
            <td>${rental.fullDay.reservation}</td>
        `;
        tableBody.appendChild(row);
    });
}
