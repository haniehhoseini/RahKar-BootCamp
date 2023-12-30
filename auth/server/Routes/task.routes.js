const express = require('express');
const router = express.Router();

const { loginTask , registerTask } = require('../Controller/task.controller');

router.post('/' , loginTask)
      .post('/reg' , registerTask);

module.exports = router;