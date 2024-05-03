// server.js

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Temporary in-memory database (replace with real database like MongoDB)
let users = [];

// Register a new user
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = {
        username,
        email,
        password: hashedPassword
    };

    // Store user in database (in-memory for this example)
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
});

// Login user
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, 'secret-key', { expiresIn: '1h' });

    res.json({ token });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
