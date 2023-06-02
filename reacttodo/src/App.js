import React, { Component } from 'react';
import './App.css';
import TodoList from './feature/todos/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

export default App;
