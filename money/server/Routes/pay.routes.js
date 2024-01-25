const express = require('express');
const router = express.Router();

const { pay } = require('../Controller/pay.controller');

router.post('/pay' , pay);

module.exports = router;
