// middlewares/jwtMiddleware.js
const passport = require('passport');

const jwtMiddleware = (roles) => (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user || (roles && !roles.includes(user.role))) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = jwtMiddleware;
