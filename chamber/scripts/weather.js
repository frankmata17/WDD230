document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const weatherInfo = document.getElementById('weather-info');
    const darkModeToggle = document.querySelector('.switch input');

    // Function to fetch weather data for San Diego from WeatherAPI
    const getWeatherData = async () => {
        const apiKey = '9122e15c99aa4d2e9fd45522240602';
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=San Diego&aqi=no`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Extract relevant weather information
            const temperature = data.current.temp_f;
            const description = data.current.condition.text;

            // Update the content of the weather card
            weatherInfo.innerHTML = `
            <p id="temperature">Temperature: ${temperature}°F</p>
            <p id="wind-speed">Wind Speed: ${data.current.wind_mph} mph</p>
            <p id="wind-chill"></p>
            <p>Description: ${description}</p>
`;

// Callback to calculate wind chill
calculateWindChill(temperature, parseFloat(data.current.wind_mph));

        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = `<p>Failed to fetch weather data: ${error.message}</p>`;
        }
    };

    // Event listener for the menu button
    menuButton.addEventListener('click', function () {
        navigation.classList.toggle('show-menu');
        menuButton.innerHTML = (navigation.classList.contains('show-menu')) ? '&#10005;' : '&#9776;';
    });

    // Event listener for navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navigation.classList.remove('show-menu');
            menuButton.innerHTML = '&#9776;';
        });
    });

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });

    // Fetch weather data for San Diego when the page loads
    getWeatherData();
});
