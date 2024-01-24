const express = require('express');
const router = express.Router();

const { book } = require('../controller/book.controller');

router.post('/book' , book);

module.exports = router;