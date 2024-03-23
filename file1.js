// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
    // Send response with group names using HTML, http://localhost:3000
    res.send('<h1>Group Members</h1><p>Negin & Italo</p>');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
