const opdiv = document.getElementById('outputdiv');
const inp = document.getElementById('inp');
const error = document.getElementById('error');

async function search() {
    const query = inp.value.trim();
    error.textContent = '';
    opdiv.innerHTML = '';

    if (!query) {
        error.textContent = 'Please enter a search term.';
        return;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=VRCZYrVldSZ8ArhuUTp0tQUKJ0v7JPWBNlUzBd0MS5Y`);
        if (!response.ok) throw new Error('Failed to fetch data.');

        const data = await response.json();
        if (data.results.length === 0) {
            opdiv.innerHTML = `<h2>No results found for "${query}"</h2>`;
            return;
        }

        data.results.forEach(image => {
            const imageDiv = document.createElement('div');
            imageDiv.className = 'imageDiv';
            imageDiv.innerHTML = `<img src="${image.urls.small}" alt="${image.alt_description || 'Image'}">`;
            opdiv.appendChild(imageDiv);
        });
    } catch (err) {
        error.textContent = 'Something went wrong. Please try again later.';
        console.error(err);
    }
}
