/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-01-17 15:30:14
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-17 17:49:40
 */
import React from 'react'
import { HeaderWrap, Logo, Nav, NavItem, SearchInput, Addition, Button, SearchWrap } from './style'
class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
  }
  handleInputFocus (boo) {
    console.log(boo)
    this.setState({
      focused: true
    })
  }
  render () {
    return (
      <HeaderWrap>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrap>
            <SearchInput
              onFocus={this.handleInputFocus}
              className={this.state.focused ? 'focused' : ''}></SearchInput>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'} >&#xe637;</i>
          </SearchWrap>

          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="write-btn">
            <i className="iconfont">&#xe6e5;</i>
            写文章</Button>
          <Button>注册</Button>
        </Addition>
      </HeaderWrap>
    )
  }
}

export default Header