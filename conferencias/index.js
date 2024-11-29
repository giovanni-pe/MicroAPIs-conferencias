const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

// Replace with your actual target endpoint
const targetEndpoint = 'http://3.147.242.156';
Conferencias 
app.get('/', async (req, res) => {
    let targetResponseTime = 0;
    try {
        const responseStartTime = Date.now();
        const response = await axios.get(targetEndpoint); 
        targetResponseTime = Date.now() - responseStartTime; 
    } catch (error) {
        console.error('Error calling Conferencias endpoint:', error.message);
    }

    res.send(`Conferencias Response Time: ${targetResponseTime}ms`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

