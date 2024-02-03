const express = require('express');
const router = express.Router();

const { SaveTitleAndName } = require('../controller/saveDatabase.controller');

router.post('/save' , SaveTitleAndName);

module.exports = router;