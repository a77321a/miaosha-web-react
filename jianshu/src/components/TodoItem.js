import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  render () {
    return (
      <div onClick={this.handleRemove}>{this.props.content} - {this.props.test}</div>
    )
  }
  handleRemove (index) {
    this.props.deleteItem(this.props.index)
    console.log(this.props.index)
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func
}
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem