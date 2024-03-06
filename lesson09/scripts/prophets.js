const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets); // temporary testing of data retrieval
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let details = document.createElement('div'); // Create a container for additional details
        let dateOfBirth = document.createElement('p');
        let placeOfBirth = document.createElement('p');
        let deathDate = document.createElement('p');
        let numOfChildren = document.createElement('p');
        let portrait = document.createElement('img');

        // Build the h2 content to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the additional details
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '50');
        portrait.setAttribute('height', '100');

        // Append the section(card) with the created elements
        details.appendChild(dateOfBirth);
        details.appendChild(placeOfBirth);
        details.appendChild(deathDate);
        details.appendChild(numOfChildren);

        card.appendChild(fullName);
        card.appendChild(details);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

