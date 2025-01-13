const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.send({ message: 'Hello from the API server!' });
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});