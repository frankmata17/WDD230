// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        
        // Display the wind chill value in the weather section
        document.getElementById('wind-chill').textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
    } else {
        // Display "N/A" if the input values did not meet the requirements
        document.getElementById('wind-chill').textContent = "Wind Chill: N/A";
    }
}

// Get temperature and wind speed from the page
const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('wind-speed');

// Extract values from the elements
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Call the function with extracted values
calculateWindChill(temperature, windSpeed);

