const express = require('express');
const router = express.Router();

const { editMemory , newMemory, deleteMemory , readMemory} = require('../Controller/task.controller');

router.post('/edit' , editMemory)
      .post('/' , newMemory)
      .post('/read' , readMemory)
      .post('/delete' , deleteMemory);

module.exports = router;