const express = require('express');
const router = express.Router();

const { createTask , readTask, deleteTask, updateTask , doneTask } = require('../Controller/task.controller');

router.post('/' , createTask)
      .get('/' , readTask)
      .delete('/:id' , deleteTask)
      .put('/' , updateTask)
      .get('/:id' , doneTask);;

module.exports = router;