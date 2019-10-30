/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-29 17:44:05
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-30 17:53:16
 */
import React, { Component } from 'react'
import store from '../reactStore';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render () {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} />
          <input type="button" value="提交" />
        </div>
        <ul>
          <li>del</li>
        </ul>
      </div>
    )
  }
}

export default TodoList