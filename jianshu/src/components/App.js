import React, { Component, Fragment } from 'react';
import { Button, Input } from 'element-react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  render () {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hellp</div>
        <Button type='primary'>toggle</Button>
      </Fragment>
    )
  }
}

export default App