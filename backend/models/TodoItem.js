import mongoose from 'mongoose';

const todoItemSchema = new mongoose.Schema({
  taskText: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const TodoItem = mongoose.model('Todo', todoItemSchema);

export default TodoItem;
