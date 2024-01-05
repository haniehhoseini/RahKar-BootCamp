const express = require('express');
const router = express.Router();

const { loginTask , registerTask , wallet } = require('../Controller/task.controller');

router.post('/' , loginTask)
      .post('/reg' , registerTask)
      .post('/wallet' , wallet);

module.exports = router;