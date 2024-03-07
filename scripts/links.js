const baseURL = "https://frankmata17.github.io/wdd230/";
const linksURL = "https://frankmata17.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById("activity-links");

    weeks.lessons.forEach(week => {
        const weekNumber = week.lesson;
        const linksArray = week.links;

        const weekListItem = document.createElement("li");
        weekListItem.textContent = `Week ${weekNumber}:`;

        linksArray.forEach(link => {
            const linkItem = document.createElement("li");

            const linkElement = document.createElement("a");
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;

            linkItem.appendChild(linkElement);

            weekListItem.appendChild(linkItem);
        });

        linksContainer.appendChild(weekListItem);
    });
}


getLinks();
