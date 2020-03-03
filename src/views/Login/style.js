/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-26 17:24:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-28 14:39:53
 */
import styled from 'styled-px2vw'

export const Logo = styled.div`
  width: 288px; 
  height: 288px; 
  background: #108ee9; 
  margin: 192px auto 128px; 
  color: #fff; 
  line-height: 288px; 
  font-size: 96px;
  text-align:center;
  border-radius:50%;
  overflow:hidden;
  /* font-weight:500; */
`
export const FormWrap = styled.div`
  margin: 0 64px; 
  line-height: 43px;
  li{
    border-bottom: 2px solid #ebebeb; 
    height: 96px; 
    padding: 32px; 
    position: relative; 
    overflow: hidden;
    input{
      border: none; 
      line-height: 128px;
       width: 100%;
      outline: 0;
      background-color: #f5f5f9;
    }
  }
  .block{
    display: block;
    background: #108ee9;
    color: #fff;
    border-radius: 64px;
    height: 128px;
    line-height: 128px;
    font-size: 1.6rem;
    margin-top: 128px;
    text-decoration:none;
    text-align:center;
  }
`