const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let users = [
  { id: 1, name: 'Gary', age: 30 },
  { id: 2, name: 'Michael', age: 33 },
];

app.use(bodyParser.json());

// GET users
app.get('/api/users', (req, res) => res.json(users));

// POST a user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
