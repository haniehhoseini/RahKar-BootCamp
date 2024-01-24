const express = require('express');
const router = express.Router();

const { user , join } = require('../controller/user.controller');

router.post('/user' , user)
      .get('/join', join);

module.exports = router;