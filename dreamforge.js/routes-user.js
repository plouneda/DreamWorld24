// routes/user.js
const express = require('express');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const updateSettings = require('../middlewares/updateSettings');

const router = express.Router();

// Update user settings route (requires authentication)
router.put('/updateSettings', jwtMiddleware, updateSettings, (req, res) => {
  res.json({ message: 'Settings updated successfully' });
});

// Other routes remain the same
