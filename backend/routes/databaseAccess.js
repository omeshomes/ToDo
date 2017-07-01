import express from 'express';
const router = express.Router();
import TodoItem from '../models/TodoItem.js'

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    taskText: req.body.taskText,
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

export default router;
