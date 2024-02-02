const express = require('express');
const router = express.Router();

const { book , joinedTables } = require('../controller/book.controller');

router.post('/book' , book)
      .get('/' , joinedTables);

module.exports = router;