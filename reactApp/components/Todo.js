import React from 'react';

class Todo extends React.Component {
  render() {
    return(
      <li>
        <button type="button">X</button>
        {(this.props.task.completed) ? (<strike>{this.props.task.taskText}</strike>) : (this.props.task.taskText)}
      </li>
    )
  }
}

export default Todo;
