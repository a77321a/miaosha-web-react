/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-01-17 11:03:34
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-17 16:54:00
 */
import React from 'react';
import GlobalStyle from './style'
import Header from './common/header'
import IconFont from './static/iconfont/iconfont';
class App extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>
        <GlobalStyle></GlobalStyle>
        <IconFont />
      </div>
    )
  }
}

export default App;
