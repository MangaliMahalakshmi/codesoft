const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/projects', (req, res) => {
    // Logic to fetch and render projects
});

app.get('/tasks', (req, res) => {
    // Logic to fetch and render tasks
});

app.get('/login', (req, res) => {
    // Logic to render login page
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
