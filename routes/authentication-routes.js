const express = require('express');
const router = express.Router();
const user = require('../controllers/user-controller');

router.route('/login').get(user.login);

module.exports = router;