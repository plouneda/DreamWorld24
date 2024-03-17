// middlewares/updateSettings.js
const { body, validationResult } = require('express-validator');

function updateSettings(req, res, next) {
  // Validation using express-validator
  const validationRules = [
    body('dreamColor').optional().isHexColor(),
    body('notificationPreferences').optional().isArray(),
    // Add more settings validations as needed
  ];

  // Run validations
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Simulate settings update (customize as needed)
  // Access settings from req.body and update the user's settings in the database

  next();
}

module.exports = updateSettings;
