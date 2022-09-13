const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');
const { UNAUTHORIZED, WRONG_TOKEN } = require('../errors/errors');

const { NODE_ENV, JWT_SECRET = 'dev-secret' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError(UNAUTHORIZED);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new AuthError(WRONG_TOKEN);
  }

  req.user = payload;

  next();
};
