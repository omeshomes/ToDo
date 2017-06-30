import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map((task, index) => (<Todo task={task} key={task.taskText}
          xClick={() => this.props.todoXClick(index)} toggleTodoClick={() => this.props.toggleClick(index)}/>))}
      </ul>
    )
  }
}

export default TodoList;
