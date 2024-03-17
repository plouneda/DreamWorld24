// routes/user.js
// ...

// Login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const { _id, username, role, age, sex, country, idNumber } = req.user;
  const token = jwt.sign({ sub: _id, username, role, age, sex, country, idNumber }, 'your-secret-key');
  res.json({ token, user: { username, role, age, sex, country, idNumber } });
});

// ...
