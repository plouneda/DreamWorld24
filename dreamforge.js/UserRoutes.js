// routes/user.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ageVerification = require('../middlewares/ageVerification');

const router = express.Router();

// Register a new user with additional information
router.post('/register', ageVerification, async (req, res) => {
  try {
    const { username, password, age, sex, country, idNumber } = req.body;
    const user = new User({ username, password, age, sex, country, idNumber });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Other routes remain the same
