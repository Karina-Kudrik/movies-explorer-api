const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const isEmail = require('validator/lib/isEmail');
const AuthError = require('../errors/AuthError');
const NotFoundError = require('../errors/NotFoundError');
const { WRONG_EMAIL_OR_PASSWORD } = require('../errors/errors');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: Object,
    unique: true,
    required: true,
    validate: {
      validator: (v) => isEmail(v),
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new NotFoundError(WRONG_EMAIL_OR_PASSWORD);
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new AuthError(WRONG_EMAIL_OR_PASSWORD);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
