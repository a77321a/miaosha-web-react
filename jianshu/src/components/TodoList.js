import React, { Component, Fragment } from 'react';
/* 
*  todolist
*/
import TodoItem from './TodoItem'
import { Button, Input } from 'element-react';

import Test from './Test'
import '../common/style.css'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleBtnSubmit = this.handleBtnSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  render () {
    return (
      <Fragment>
        <input ref={(input) => { this.input = input }} type="primary" className="input" onChange={this.handleInputChange} value={this.state.inputValue} type="text" />
        <Button type="primary" onClick={this.handleBtnSubmit} >提交</Button>
        <ul>
          {
            this.getTodoListItem()
          }
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment >
    )
  }
  // return <li dangerouslySetInnerHTML={{ __html: item }} key={index} onClick={this.handleRemove.bind(this, index)}></li>
  getTodoListItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem deleteItem={this.handleRemove} key={index} index={index} content={item} />
      )
    })
  }
  handleInputChange (e) {
    console.log(this.input.value)
    const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnSubmit () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    this.setState({
    })
  }
  handleRemove (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
export default TodoList;
