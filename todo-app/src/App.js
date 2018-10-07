import React, { Component } from 'react';
// import './App.css';
import Todo from './todo'
import AddTodo from './addTodo'

class App extends Component {
  state = {
    items: [
      { id: 1, content: 'Hello Guys this is first item' },
      { id: 2, content: 'Hello boss im the second item' }
    ]
  }
  deleteItem = (id) => {
    let delItem = this.state.items.filter(del => {
      return del.id !== id
    })
    this.setState({
      items: delItem
    })
  }

  addItem = (item) => {
    item.id = Math.random()
    let newItem = [...this.state.items, item]
    console.log(newItem)
    this.setState({
      items: newItem
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo Items</h1>
        <Todo data={this.state.items} deleteData={this.deleteItem} />
        <AddTodo addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
