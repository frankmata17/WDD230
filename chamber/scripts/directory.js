document.addEventListener('DOMContentLoaded', function () {
    const gridViewInput = document.getElementById('grid-view');
    const listViewInput = document.getElementById('list-view');
    const membersContainer = document.getElementById('members-container');

    gridViewInput.addEventListener('change', toggleView);
    listViewInput.addEventListener('change', toggleView);

    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }

    function toggleView() {
        membersContainer.classList.toggle('list-view', listViewInput.checked);

        // Fetch member data from the JSON file
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                // Generate HTML based on selected view
                let membersHTML = '';
                if (listViewInput.checked) {
                    // For list view, display only name, phone, and website
                    membersHTML = data.members.map(member => {
                        return `<div class="member-list-item">
                                    <h3>${member.name}</h3>
                                    <p>Phone: ${member.phone}</p>
                                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                                </div>`;
                    }).join('');
                } else {
                    // For grid view, display full member information with truncated strings
                    membersHTML = data.members.map(member => {
                        return `<div class="member-card">
                                    <img src="${member.image}" alt="${member.name}">
                                    <h3>${member.name}</h3>
                                    <p>${truncateString(member.address, 50)}</p>
                                    <p>Phone: ${member.phone}</p>
                                    <p>Website: <a href="${member.website}" target="_blank">${truncateString(member.website, 30)}</a></p>
                                    <p>Membership Level: ${member.membershipLevel}</p>
                                    <p>${truncateString(member.additionalInfo, 100)}</p>
                                </div>`;
                    }).join('');
                }

                // Insert the generated HTML into the members container
                membersContainer.innerHTML = membersHTML;
            })
            .catch(error => console.error('Error fetching member data:', error));
    }
    toggleView();
});
