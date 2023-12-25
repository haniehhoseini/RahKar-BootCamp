const express = require('express');
const router = express.Router();

const { createTask , readTask, deleteTask, updateTask } = require('../Controller/task.controller');

router.post('/' , createTask)
      .get('/' , readTask)
      .delete('/:id' , deleteTask)
      .put('/' , updateTask);

module.exports = router;