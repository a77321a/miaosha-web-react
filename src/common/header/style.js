/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-01-17 15:34:14
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-17 17:08:15
 */
import styled from 'styled-components'
import logoPic from '../images/logo.png'

export const HeaderWrap = styled.div`
  height:56px;
  border-bottom:1px solid #e7e7e7;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  float: left;
  height: 56px;
  width:100px;
  background:red;
  padding: 0;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  float: left;
  height:100%;
`
export const NavItem = styled.div`
  padding:0 15px;
  font-size:17px;
  line-height:56px;
  cursor:pointer;
  color:#333;
  &.left{
    float:left;
  }
  &.active{
    color:#ea6f5a
  }
  &.right{
    float:right;
    color:#969696;
  }
`
export const SearchWrap = styled.div`
  float:left;
  position:relative;
  .iconfont {
    display:inline-block;
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    border-radius:50%;
    text-align:center;
    line-height:30px;
  }
`
export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    margin-top:7px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    outline:none;
    background: #eee;
    line-height: 56px;
    font-size:14px;
    margin-left:20px;
`
export const Addition = styled.div`
  float:right;
  height:56px;
`
export const Button = styled.a`
  float: right;
  cursor:pointer;
  width: 80px;
  height: 38px;
  user-select: none;
  line-height: 38px;
  text-align:center;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  &.write-btn{
    padding:0 12px;
    color:#fff;
    background-color: #ea6f5a;
  }
`
