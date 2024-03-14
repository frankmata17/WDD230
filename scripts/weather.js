document.addEventListener('DOMContentLoaded', function () {
    const weatherElement = document.querySelector('.card2 li.weather');

    const apiKey = 'bdecea99b7731afac95712d03c892d93';
    const city = 'Pleasant Grove';

    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const description = capitalizeFirstLetter(data.weather[0].description);
            const temperatureCelsius = Math.round(data.main.temp - 273.15);
            const temperatureFahrenheit = Math.round((temperatureCelsius * 9/5) + 32);
            const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            weatherElement.innerHTML = `
                <div>
                    <img src="${iconUrl}" alt="${description}">
                </div>
                <div>
                    <p>Weather: ${description}</p>
                    <p>Temperature: ${temperatureFahrenheit}°F</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherElement.innerHTML = 'Weather data not available';
        });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
