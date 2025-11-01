// main.js
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const weatherResult = document.getElementById('weatherResult');

    try {
        const response = await fetch(`/weather?location=${encodeURIComponent(location)}`);
        const data = await response.json();
        
        if (response.ok) {
            weatherResult.innerHTML = `
                <h3 class="text-lg font-semibold">Weather in ${location}</h3>
                <p class="text-gray-600">Temperature: ${data.temp}°C</p>
                <p class="text-gray-600">Description: ${data.description}</p>
            `;
        } else {
            weatherResult.innerHTML = `<p class="text-red-500">Error: ${data.error}</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p class="text-red-500">Error fetching weather data.</p>`;
    }
});
