import React, { Component } from 'react'

class TodoItem extends Component {
  render () {
    return (
      <div onClick={this.handleRemove.bind(this)}>{this.props.content}</div>
    )
  }
  handleRemove (index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
export default TodoItem