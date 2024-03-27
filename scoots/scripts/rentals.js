// rentals.js

document.addEventListener("DOMContentLoaded", function() {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            populateTable(data.rentals.scooters, 'scooterTable');
            populateTable(data.rentals.atvs, 'atvTable');
            populateTable(data.rentals.jeeps, 'jeepTable');
        })
        .catch(error => console.error('Error fetching rentals data:', error));
});

function populateTable(rentals, tableId) {
    const tableBody = document.getElementById(tableId);
    
    rentals.forEach(rental => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rental.name}</td>
            <td>${rental.capacity}</td>
        `;
        tableBody.appendChild(row);
    });
}
