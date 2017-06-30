import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map((task) => (<Todo task={task} key={task.taskText}/>))}
      </ul>
    )
  }
}

export default TodoList;
