const express = require('express');
const router = express.Router();

const { history } = require('../Controller/history.controller');

router.post('/buy' , history);

module.exports = router;