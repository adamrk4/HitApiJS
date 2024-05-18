const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3002; // שינוי לפורט 3001

app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
