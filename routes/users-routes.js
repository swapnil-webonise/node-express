const express = require('express');
const router = express.Router();
const user = require('../controllers/user-controller');

router.route('/').get(user.getUsers);
router.route('/:id').get(user.getUserDetails);

module.exports = router;