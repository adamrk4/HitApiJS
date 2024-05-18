document.getElementById('goButton').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3002/api/data');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';

    data.slice(0, 9).forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        `;
        cardsContainer.appendChild(card);
    });
}
