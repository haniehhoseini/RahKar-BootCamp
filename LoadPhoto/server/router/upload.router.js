const express = require('express');
const router = express.Router();

const { addPhoto , sendPhoto} = require('../controller/upload.controller');

router.post('/send' , addPhoto)
      .get('/get', sendPhoto);

module.exports = router;