document.addEventListener('DOMContentLoaded', function () {
    const weatherElement = document.querySelector('.card2 li.weather');

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'bdecea99b7731afac95712d03c892d93';
    const city = 'Pleasant Grove';  // Replace with your city name

    // OpenWeatherMap API endpoint
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetch weather data
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // Extract relevant weather information
            const description = capitalizeFirstLetter(data.weather[0].description);
            const temperatureCelsius = Math.round(data.main.temp - 273.15);
            const temperatureFahrenheit = Math.round((temperatureCelsius * 9/5) + 32);

            // Update the weather information in the HTML
            weatherElement.innerHTML = `Weather: ${description}<br>Temperature: ${temperatureFahrenheit}°F`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherElement.innerHTML = 'Weather data not available';
        });

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
