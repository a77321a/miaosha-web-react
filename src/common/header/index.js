/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-01-17 15:30:14
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-17 17:00:36
 */
import React from 'react'
import { HeaderWrap, Logo, Nav, NavItem, SearchInput, Addition, Button, SearchWrap } from './style'
class Header extends React.Component {
  render () {
    return (
      <HeaderWrap>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrap>
            <SearchInput></SearchInput>
            <i className="iconfont">&#xe637;</i>
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