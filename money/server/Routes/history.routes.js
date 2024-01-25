const express = require('express');
const router = express.Router();

const { buy , allPayment } = require('../Controller/history.controller');

router.post('/buy' , buy)
      .post('/allPayment', allPayment);

module.exports = router;
