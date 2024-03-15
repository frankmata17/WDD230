document.addEventListener('DOMContentLoaded', function () {
    const gridViewInput = document.getElementById('grid-view');
    const listViewInput = document.getElementById('list-view');
    const membersContainer = document.getElementById('members-container');

    gridViewInput.addEventListener('change', toggleView);
    listViewInput.addEventListener('change', toggleView);

    function toggleView() {
        membersContainer.classList.toggle('list-view', listViewInput.checked);
    }

    // Fetch member data from the JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            // Generate HTML for member cards or list items
            const membersHTML = data.members.map(member => {
                if (gridViewInput.checked) {
                    return `<div class="member-card">
                                <img src="${member.image}" alt="${member.name}">
                                <h3>${member.name}</h3>
                                <p>${member.address}</p>
                                <p>Phone: ${member.phone}</p>
                                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                                <p>Membership Level: ${member.membershipLevel}</p>
                                <p>${member.additionalInfo}</p>
                            </div>`;
                } else {
                    return `<div class="member-list-item">
                                <h3>${member.name}</h3>
                                <p>${member.address}</p>
                                <p>Phone: ${member.phone}</p>
                                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                            </div>`;
                }
            }).join('');

            // Insert the generated HTML into the members container
            membersContainer.innerHTML = membersHTML;
        })
        .catch(error => console.error('Error fetching member data:', error));
});
