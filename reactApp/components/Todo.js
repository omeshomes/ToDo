import React from 'react';

class Todo extends React.Component {
  render() {
    return(
      <li>
        <button type="button" onClick={() => this.props.xClick()}>X</button>
         <span onClick={() => this.props.toggleTodoClick()}>
           {(this.props.task.completed) ? (<strike>{this.props.task.taskText}</strike>) : (this.props.task.taskText)}
         </span>
      </li>
    )
  }
}

export default Todo;
