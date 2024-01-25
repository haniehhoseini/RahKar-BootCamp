const express = require('express');
const router = express.Router();

const { buy , allPaymentBuy , allPaymentPay } = require('../Controller/history.controller');

router.post('/buy' , buy)
      .post('/allPayment', allPaymentBuy)
      .post('/allPaymentPay', allPaymentPay);

module.exports = router;
