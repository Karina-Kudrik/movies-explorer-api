const { celebrate, Joi } = require('celebrate');
const isURL = require('validator/lib/isURL');
const { INVALID_URL } = require('../errors/errors');

const url = (value, helpers) => {
  if (isURL(value)) {
    return value;
  }
  return '';
};

const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const validateUpdateUserInfo = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().default("Неизвестна"),
    director: Joi.string().required().default("Неизвестен"),
    duration: Joi.number().required().default("Неизвестна"),
    year: Joi.string().required().default("Незивестен"),
    description: Joi.string().required().default("Отсутствтует"),
    image: Joi.string().required().custom(url),
    trailerLink: Joi.string().required().custom(url),
    thumbnail: Joi.string().required().custom(url),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().default("Отсутствует"),
    nameEN: Joi.string().required().default("Отсутствует"),
  }),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateUpdateUserInfo,
  validateCreateMovie,
  validateDeleteMovie,
};
