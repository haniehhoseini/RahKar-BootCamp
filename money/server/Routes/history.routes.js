const express = require('express');
const router = express.Router();

const { buy , allPaymentBuy , allPaymentPay , baghiePol} = require('../Controller/history.controller');

router.post('/buy' , buy)
      .post('/allPayment', allPaymentBuy)
      .post('/allPaymentPay', allPaymentPay)
      .post('/baghiePol' , baghiePol);

module.exports = router;
