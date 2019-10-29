/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-29 17:44:05
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-29 17:45:50
 */
import React, { Component } from 'react'

class TodoList extends Component {
  render () {
    return (
      <div>
        <div>
          <input type="text" />
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