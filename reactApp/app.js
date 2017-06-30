import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['water the plants', 'eat the birds', 'drink the clam juice', 'achieve world domination'];

class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {dummyData.map((string) => (<Todo task={string} key={string}/>))}
      </ul>
    )
  }
}

class Todo extends React.Component {
  render() {
    return(
      <li>
        <button type="button">X</button>
        {this.props.task}
      </li>
    )
  }
}


ReactDOM.render(<TodoList />, document.getElementById('root'));
