import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';

var dummyData = [{taskText: 'water the plants', completed: false},
                {taskText: 'eat the birds', completed: false},
                {taskText: 'drink the clam juice', completed: false},
                {taskText: 'achieve world domination', completed: true}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos: dummyData});
  }

  addTodo(task) {
      dummyData.push({taskText: task, completed: false});
      this.setState({todos: dummyData});
  }

  render() {
    return(
      <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
