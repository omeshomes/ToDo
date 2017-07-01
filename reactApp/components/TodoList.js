import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map((task) => (<Todo task={task} key={task._id}
          xClick={() => this.props.todoXClick(index)} toggleTodoClick={() => this.props.toggleClick(task._id)}/>))}
      </ul>
    )
  }
}

export default TodoList;
