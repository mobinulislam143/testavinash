const express = require('express');
const router = express.Router();
const userController = require('../../controller/usercontroller');

router.get('/signup', userController.signUp);

module.exports = router;
