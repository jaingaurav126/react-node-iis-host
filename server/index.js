const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors package


const app = express();
const PORT = 5000;

// Middleware to serve React static files
app.use(express.static(path.join(__dirname, '../my-app/build')));
app.use(cors());
// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend. How are you guys doing!' });
});

// Catch-all route to serve React index.html for non-API requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
