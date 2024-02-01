const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Signup API
app.post('/signup', (req, res) => {
  const { fullName, dateOfBirth, sex, nationality, idNumber } = req.body;

  // Implement your signup logic here (e.g., store data in a database)

  res.json({ message: 'Signup successful', user: { fullName, dateOfBirth, sex, nationality, idNumber } });
});

// Login API
app.post('/login', (req, res) => {
  // Implement your login logic here

  res.json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
