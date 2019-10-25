/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-25 10:15:59
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-25 10:16:14
 */

import React, { Component, Fragment } from 'react';
import { Button, Input } from 'element-react';
import '../common/style.css'
// pureComponent
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.toggleBtn = this.toggleBtn.bind(this)
  }
  render () {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hellp</div>
        <Button onClick={this.toggleBtn} type='primary'>toggle</Button>
      </Fragment>
    )
  }
  toggleBtn () {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
    console.log(this.state.show)
  }
}

export default App