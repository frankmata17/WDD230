document.addEventListener('DOMContentLoaded', async function () {
    const weatherElement = document.querySelector('.card2 li.weather');
    const apiKey = 'bdecea99b7731afac95712d03c892d93';
    const city = 'Pleasant Grove';

    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const data = await fetchWeatherData(apiEndpoint);
        displayWeatherData(data, weatherElement);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherElement.innerHTML = 'Weather data not available';
    }

    // Function to fetch weather data
    async function fetchWeatherData(endpoint) {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return await response.json();
    }

    // Function to display weather data
    function displayWeatherData(data, element) {
        const description = capitalizeFirstLetter(data.weather[0].description);
        const temperatureCelsius = Math.round(data.main.temp - 273.15);
        const temperatureFahrenheit = Math.round((temperatureCelsius * 9/5) + 32);
        const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        element.innerHTML = `
            <div>
                <img src="${iconUrl}" alt="${description}">
            </div>
            <div>
                <p>Weather: ${description}</p>
                <p>Temperature: ${temperatureFahrenheit}°F</p>
            </div>
        `;
    }

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
