import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText: 'water the plants', completed: false},
                {taskText: 'eat the birds', completed: false},
                {taskText: 'drink the clam juice', completed: false},
                {taskText: 'achieve world domination', completed: true}];

class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {dummyData.map((task) => (<Todo task={task} key={task.taskText}/>))}
      </ul>
    )
  }
}

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

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="task" />
        <button type="button">Add todo</button>
      </div>
    )
  }
}

class TodoApp extends React.Component {
  render() {
    return(
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
