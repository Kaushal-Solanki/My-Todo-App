import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({
      content: ''
    })
  }
  render() {
    const { content } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='content' value={content} onChange={this.handleChange} />
          <button className="waves-effect waves-light btn-small">Add Item</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
