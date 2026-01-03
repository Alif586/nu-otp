const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Public folder serve
app.use(express.static(path.join(__dirname, 'public')));

// Front-end JS serve from /js folder
/*app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', 'app.js'));
});*/

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
