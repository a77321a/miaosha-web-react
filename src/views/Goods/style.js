/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-27 21:45:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-02 18:08:46
 */
/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-27 21:45:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-29 17:59:54
 */
import styled from 'styled-px2vw'
import stylee from 'styled-components'

export const Goods = styled.div`
  img{
    display:block;
    width:100%;
    height: 400px;
    font-size:0;
  }
  h1{
    margin-top:40px;
    
  }
  .main{
    position:relative;
    padding:20px 30px 40px;
    background-color: #fff;
    .prom-time{
      position:absolute;
      width:100%;
      text-indent:30px;
      z-index:2;
      top:-30px;
      left:0;
      height: 80px;
      line-height:80px;
      background-color: #e94f4f;
      color:#fff;
    }
  }
  .price{
    padding:20px 0 0;
    font-size:50px;
    color:red;
  }
`
export const FooterWrap = stylee.div`
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
    &:disabled{
      background:rgba(255, 149, 0,.4);
      cursor: not-allowed;
    }
  }
  .cart {
    background: #FF9500;
  }
  .buy {
    background: #DD2727;
  }
`
