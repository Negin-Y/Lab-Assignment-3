// Import required modules
const express = require('express');
const jsonData = require('./data/data.json'); 

// Create Express app
const app = express();

// Define route to display JSON contents, http://localhost:3000/cars
app.get('/cars', (req, res) => {
    // Send JSON data as response
    res.json(jsonData);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
