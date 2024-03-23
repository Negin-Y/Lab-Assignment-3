// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Implement CRUD operations
// Defining rout to Get Method 
// URL => http://localhost:3000/root
app.get('/root', (req, res) => {
    res.send('Hello everybody! We are using .get() HTTP method to see the root page');
});

// Defining rout to Post method
// URL => http://localhost:3000/create
app.post("/create", (req, res) => {
    res.send('Hello everybody! We are using .post() HTTP method for "Create" using the rout "/create"');
});

// Defining rout to Put method
// URL => http://localhost:3000/update
app.put("/update", (req, res) => {
    res.send('Hello everybody! We are using .put() HTTP method for "Update" using the rout "/update"');
});

// Defining rout to Delete method
// URL => http://localhost:3000/delete
app.delete("/delete", (req, res) => {
    res.send('Hello everybody! We are using .delete() HTTP method for "Delete" using the rout "/delete"');
});


// Start the server, http://localhost:3000/root
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
