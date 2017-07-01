import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';
import axios from 'axios';

var dummyData = [{taskText: 'water the plants', completed: false},
                {taskText: 'eat the birds', completed: false},
                {taskText: 'drink the clam juice', completed: false},
                {taskText: 'achieve world domination', completed: true}];

const dbUrl = "http://localhost:3000/db";

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
    axios.post(dbUrl + '/add', {taskText: task})
      .then((response) => {
        this.setState({ todos: this.state.todos.concat(response.data)});
        console.log(response);
        console.log(this.state.todos);
      })
      .catch(function (error) {
        console.log(error);
      });
      // dummyData.push({taskText: task, completed: false});
      // this.setState({todos: dummyData});
  }

  removeTodo(index) {
    dummyData.splice(index,1);
    this.setState({todos: dummyData});
  }

  toggleTodo(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({todos: dummyData});
  }

  render() {
    return(
      <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos} todoXClick={(index) => this.removeTodo(index)} toggleClick={(index) => this.toggleTodo(index)}/>
      </div>
    )
  }
}

export default TodoApp;
