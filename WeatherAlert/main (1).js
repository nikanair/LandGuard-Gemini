//main.js
document.getElementById('locationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    try {
        const response = await fetch('/get-weather-alerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        });

        const data = await response.json();
        const newsCardsContainer = document.getElementById('newsCards');
        newsCardsContainer.innerHTML = ''; // Clear previous results

        data.newsArticles.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('bg-white', 'shadow-md', 'p-4', 'rounded-md', 'hover:shadow-lg', 'transition-shadow', 'duration-300');

            card.innerHTML = `
                <h3 class="text-lg font-semibold">${article.headline || 'Google News'}</h3>
                <p class="text-gray-600 mt-2">${article.snippet || 'Weather updates'}</p>
                <a href="${article.link}" target="_blank" class="text-blue-500 mt-4 inline-block">Read More</a>
            `;

            newsCardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error:', error);
        const newsCardsContainer = document.getElementById('newsCards');
        newsCardsContainer.innerHTML = '<p class="text-red-500">Error fetching weather alerts.</p>';
    }
});