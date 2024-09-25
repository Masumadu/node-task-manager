const express = require('express');
const router = express.Router();
const task = require('../controllers/tasks');

router.get('/', task.getAllTasks);

router.post('/', task.createTask);

router.get('/:id', task.getTask);

router.patch('/:id', task.updateTask);

router.delete('/:id', task.deleteTask);

module.exports = router;