// Function to calculate wind chill
function calculateWindChill() {
    // Get temperature and wind speed from the input fields
    const temperatureInput = document.getElementById('temperature');
    const windSpeedInput = document.getElementById('windSpeed');
    const windChillOutput = document.getElementById('windChill');

    // Convert input values to numbers
    const temperature = parseFloat(temperatureInput.value);
    const windSpeed = parseFloat(windSpeedInput.value);

    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        // Display the wind chill value in the weather section
        document.getElementById('windChill').textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
    } else {
        // Display "N/A" if the input values did not meet the requirements
        document.getElementById('windChill').textContent = "Wind Chill: N/A";
    }
}

// Attach event listeners to input fields
document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperature');
    const windSpeedInput = document.getElementById('windSpeed');

    temperatureInput.addEventListener('input', calculateWindChill);
    windSpeedInput.addEventListener('input', calculateWindChill);

    // Initial calculation when the page loads
    calculateWindChill();
});
