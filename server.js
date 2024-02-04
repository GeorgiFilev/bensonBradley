const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Choose a port for your Express server

// Enable CORS for all routes
app.use(cors());

// Serve the React app
app.use(express.static(path.join(__dirname, 'build')));

// Use "/api/" route for JSON server
app.use('/api', jsonServer.router('data/db.json'));

// For any other route, serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
