// middlewares/dreamConnection.js
const { body, validationResult } = require('express-validator');

// ... (previous code)

function dreamConnection(req, res, next) {
  // Validation using express-validator
  const validationRules = [
    body('fullName').notEmpty(),
    body('sex').notEmpty(),
    body('dateOfBirth').notEmpty(),
    body('country').notEmpty(),
    body('age').isInt({ min: 18 }),
    body('identity').isLength({ min: 6 }),
  ];

  // Run validations
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // ... (remaining code)
}

module.exports = dreamConnection;
