document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '8b0372f233caec5f0db0f6f80aa340e8';

    const getThreeDayForecast = async () => {
        // Replace the latitude and longitude values with the coordinates of San Diego
        const lat = '32.7157';
        const lon = '-117.1611';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch forecast data: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Forecast data:', data); // Log the forecast data to inspect it

            const dailyForecast = groupForecastByDay(data.list);

            const threeDayForecast = dailyForecast.slice(0, 3);

            const forecastContainer = document.getElementById('forecast-container');
            forecastContainer.innerHTML = '';

            threeDayForecast.forEach(day => {
                const averageTemperature = calculateAverageTemperature(day.forecasts);
                const weatherDescription = getMostCommonWeatherDescription(day.forecasts);
                const weatherIcon = `https://openweathermap.org/img/wn/${day.forecasts[0].weather[0].icon}.png`;

                const forecastItem = document.createElement('div');
                forecastItem.classList.add('forecast-item');
                forecastItem.innerHTML = `
                    <p>${day.date}</p>
                    <img class="weather-icon" src="${weatherIcon}" alt="${weatherDescription}">
                    <p>Avg. Temp: ${averageTemperature}°F</p>
                    <p>${weatherDescription}</p>
                `;
                forecastContainer.appendChild(forecastItem);
            });
        } catch (error) {
            console.error('Error fetching three-day forecast:', error);
        }
    };

    const groupForecastByDay = (forecastData) => {
        if (!forecastData || forecastData.length === 0) {
            return [];
        }

        const dailyForecast = {};
        forecastData.forEach(forecast => {
            const date = forecast.dt_txt.split(' ')[0];
            if (!dailyForecast[date]) {
                dailyForecast[date] = {
                    date: date,
                    forecasts: [forecast]
                };
            } else {
                dailyForecast[date].forecasts.push(forecast);
            }
        });
        return Object.values(dailyForecast);
    };

    const calculateAverageTemperature = (forecasts) => {
        const totalTemperature = forecasts.reduce((acc, curr) => acc + curr.main.temp, 0);
        return Math.round(totalTemperature / forecasts.length);
    };

    const getMostCommonWeatherDescription = (forecasts) => {
        const descriptions = {};
        forecasts.forEach(forecast => {
            if (forecast.weather && forecast.weather.length > 0) {
                const description = forecast.weather[0].description;
                if (descriptions[description]) {
                    descriptions[description]++;
                } else {
                    descriptions[description] = 1;
                }
            }
        });
        return Object.keys(descriptions).reduce((a, b) => descriptions[a] > descriptions[b] ? a : b);
    };

    getThreeDayForecast();
});
