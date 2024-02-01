// routes/user.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ageVerification = require('../middlewares/ageVerification');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const dreamService = require('../services/dreamService');
const dreamConnection = require('../middlewares/dreamConnection');
const ringIntegration = require('../middlewares/ringIntegration');

const router = express.Router();

// Connect to DreamWorld route (requires authentication and ring integration)
router.post('/connectToDreamWorld', jwtMiddleware, ringIntegration, dreamConnection, (req, res) => {
  res.json({ message: 'Connected to DreamWorld successfully' });
});

// Other routes remain the same
