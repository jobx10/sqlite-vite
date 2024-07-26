const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3001;

// Setup SQLite database
const db = new sqlite3.Database('./bd.db'); // In-memory database for simplicity

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS user (id INT, name TEXT)");
  db.run("INSERT INTO user (id, name) VALUES (1, 'Alice')");
  db.run("INSERT INTO user (id, name) VALUES (2, 'Bob')");
});

app.use(express.static(path.join(__dirname, './dist')));

// API endpoint to get users
app.get('/api/users', (req, res) => {
  db.all("SELECT * FROM user", [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
