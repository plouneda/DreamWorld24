// middlewares/ageVerification.js
const ageVerification = (req, res, next) => {
  const { age } = req.body;

  if (!age || age < 18) {
    return res.status(400).json({ error: 'You must be 18 years or older to register' });
  }

  next();
};

module.exports = ageVerification;
