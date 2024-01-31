const express = require('express');
const router = express.Router();

const { editMemory , newMemory, deleteMemory , readMemory , readMemoryWithSpecificID } = require('../Controller/memory.controller');

router.post('/edit' , editMemory)
      .post('/create' , newMemory)
      .get('/read' , readMemory)
      .post('/delete' , deleteMemory)
      .post('/readMemoryWithSpecificID', readMemoryWithSpecificID);

module.exports = router;