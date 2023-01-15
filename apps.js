const express = require('express');
const axios = require('axios');
const app = express();

app.get('/jobs', (req, res) => {
    const query = req.query.q;
    const location = req.query.location;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://jobs.github.com/positions.json?description=${query}&location=${location}`;

    axios.get(url)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Failed to retrieve job listings' });
        });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
