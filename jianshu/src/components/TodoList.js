import React, { Component, Fragment } from 'react';
/* 
*  todolist
*/
import TodoItem from './TodoItem'
import '../common/style.css'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render () {
    return (
      <Fragment>
        <input className="input" onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} type="text" />
        <input type="button" value="提交" onClick={this.handleBtnSubmit.bind(this)} />
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem content={item} />

              )
            })
          }
        </ul>
      </Fragment >
    )
  }
  // return <li dangerouslySetInnerHTML={{ __html: item }} key={index} onClick={this.handleRemove.bind(this, index)}></li>

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnSubmit () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
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
export default TodoList;
