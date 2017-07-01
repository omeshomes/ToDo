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

  router.get('/all', (req,res) => {
    TodoItem.find({}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send(response);
      }
    })
  })
  //receives the toggled completed property from client
  router.post('/toggle', (req,res) => {
    TodoItem.findByIdAndUpdate(req.body.id, {$set: {completed: req.body.completed}})
      .then((response) => {
        console.log('response', response);
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      })
    })

  router.post('/remove', (req,res) => {
    
  })

export default router;
