document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const weatherInfo = document.getElementById('weather-info');
    const temperatureInput = document.getElementById('temperature');
    const windSpeedInput = document.getElementById('windSpeed');
    const darkModeToggle = document.querySelector('.switch input');

    const getWeatherData = async () => {
        const apiKey = '9aaed584a6c3babdc850ec2c4c570509';
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=San Diego&aqi=no`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const temperature = data.current.temp_f;
            const description = data.current.condition.text;

            weatherInfo.innerHTML = `
                <p id="weather">Current Conditions: ${description}</p>
                <label for="temperature">Temperature (°F): </label>
                <input type="number" id="temperature" placeholder="Enter temperature" value="${temperature}">
                <br>
                <label for="windSpeed">Wind Speed (mph): </label>
                <input type="number" id="windSpeed" placeholder="Enter wind speed" value="${data.current.wind_mph}">
                <br>
                <p>Wind Chill: <span id="windChill">N/A</span></p>
            `;

            // Initial calculation when the page loads
            updateWindChill();

        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = `<p>Failed to fetch weather data: ${error.message}</p>`;
        }
    };

    menuButton.addEventListener('click', function () {
        navigation.classList.toggle('show-menu');
        menuButton.innerHTML = (navigation.classList.contains('show-menu')) ? '&#10005;' : '&#9776;';
    });

    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navigation.classList.remove('show-menu');
            menuButton.innerHTML = '&#9776;';
        });
    });

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });

    temperatureInput.addEventListener('input', updateWindChill);
    windSpeedInput.addEventListener('input', updateWindChill);

    function updateWindChill() {
        const temperature = parseFloat(temperatureInput.value);
        const windSpeed = parseFloat(windSpeedInput.value);
        calculateWindChill(temperature, windSpeed);
    }

    getWeatherData();
});
