const router = require('express').Router();

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/user');

const { validateUpdateUserInfo } = require('../middlewares/validation');

router.get('/me', getUserInfo);
router.patch('/me', validateUpdateUserInfo, updateUserInfo);

module.exports = router;
