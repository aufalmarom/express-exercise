const express = require('express');
const {
    Login,
    Logout
  } = require('../controllers/AuthController.js');

const router = express.Router();

router.post('/v1/api/login', Login);
router.post('/v1/api/logout', Logout);

module.exports = router;