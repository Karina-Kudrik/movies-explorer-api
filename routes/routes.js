const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { createUser, login } = require('../controllers/user');
const NotFoundError = require('../errors/NotFoundError');
const auth = require('../middlewares/auth');
const { validateSignup, validateSignin } = require('../middlewares/validation');
const { PAGE_NOT_FOUND } = require('../errors/errors');

router.post('/signup', validateSignup, createUser);
router.post('/signin', validateSignin, login);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError(PAGE_NOT_FOUND));
});

module.exports = router;
