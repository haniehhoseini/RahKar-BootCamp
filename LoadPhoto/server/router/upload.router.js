const express = require('express');
const router = express.Router();

const { addPhoto } = require('../controller/upload.controller');

router.post('/send' , addPhoto);

module.exports = router;