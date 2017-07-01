import React from 'react';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(dbUrl + '/all')
      .then((data) => {
        console.log(data);
        this.setState({todos: data.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addTodo(task) {
    axios.post(dbUrl + '/add', {taskText: task})
      .then((response) => {
        this.setState({ todos: this.state.todos.concat(response.data)});
        console.log(response);
        // console.log(this.state.todos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  removeTodo(index) {
    dummyData.splice(index,1);
    this.setState({todos: dummyData});
  }

  toggleTodo(id) {
    // dummyData[index].completed = !dummyData[index].completed;
    // this.setState({todos: dummyData});
    console.log(this.state.todos);
    var index = this.state.todos.findIndex((todo) => {
      return todo._id === id;
    })
    //send the toggled props to axios
    axios.post(dbUrl + '/toggle', {id: id, completed: !this.state.todos[index].completed})
      .then((todo) => {
        // console.log('todo', todo.data);
        // this.setState({todos: this.state.todos.slice(0,index)
        //   .concat(todo.data)
        //   .concat(this.state.todos.slice(index+1))});
        var temp = this.state.todos;
        temp[index].completed = !temp[index].completed;
        this.setState({todos: temp});
      })
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
