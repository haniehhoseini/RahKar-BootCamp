const express = require('express');
const router = express.Router();

const { editMemory , newMemory, deleteMemory , readMemory} = require('../Controller/memory.controller');

router.post('/edit' , editMemory)
      .post('/create' , newMemory)
      .post('/read' , readMemory)
      .post('/delete' , deleteMemory);

module.exports = router;