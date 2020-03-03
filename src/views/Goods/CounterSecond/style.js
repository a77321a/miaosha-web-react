/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-29 18:00:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-02 18:02:05
 */
import styled from 'styled-components'
export const FooterWrap = styled.div`
  position:fixed;
  bottom:0;
  display:flex;
  width:100%;
  height: 49px;
  background-color: #fff;
  flex-wrap: wrap;
  align-items: center;
  overflow:hidden;
  /* &::before{
    content:'';
    position: absolute;
    display: block;
    top:0;
    height: 1px;
    width:100%;
    background-color: rgba(0,0,0,.05);
  } */
  .ico-btn {
    display: block;
    padding-top: 6px;
    max-width: 50px;
    min-width: 26px;
    align-items: center;
    height: 49px;
    width: 50px;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.05);
    cursor: pointer;
  }
  .box-btn{
    display: block;
    position: relative;
    top: -3px;
    flex:1;
    flex-basis: 0;
    height:49px;
    line-height:49px;
    max-width: 100%;
    padding: 0!important;
    text-align: center;
    color:#fff;
    border:none;
  }
  .cart {
    background: #FF9500;
  }
  .buy {
    background: #DD2727;
  }
`