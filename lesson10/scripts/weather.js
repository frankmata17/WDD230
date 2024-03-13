const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';

const queryParams = '?lat=49.7511&lon=6.636&units=imperial&appid=bdecea99b7731afac95712d03c892d93';

const fullUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7511&lon=6.636&units=imperial&appid=bdecea99b7731afac95712d03c892d93';

async function apiFetch() {
    try {

    const response = await fetch(fullUrl);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {

    console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    try {

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

    const capitalizedDescriptions = [];

    data.weather.forEach(event => {

        const capitalizedDescription = event.description
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

        capitalizedDescriptions.push(capitalizedDescription);
    });

    captionDesc.textContent = capitalizedDescriptions.join(', ');

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    } catch (error) {
    console.error('Error displaying results:', error);
    }
}

