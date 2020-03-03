import React, { useState, useEffect, Fragment } from 'react'
import store from '../../store'
import { changeHeaderBar } from '../../store/actionTypes'
import * as api from './api'
import { List, SearchBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import styled from 'styled-px2vw'

const NoData = styled.h2`
  padding: 50px 0;
  text-align: center;
`

const Item = List.Item
const Brief = Item.Brief

const GoodsList = props => {
  const [goodsList, setGoodsList] = useState([])

  useEffect(() => {
    store.dispatch({
      type: changeHeaderBar,
      value: '商品列表'
    })
    api.getGoodsList().then(res => {
      setGoodsList(res.data)
    })
  }, [])
  /*
   * @descripttion: 跳转商品详情
   * @param {number} id 商品id
   * @return:
   */
  const toGoodsDetail = id => {
    let { history } = props
    history.push('/goodsDetail/' + id)
  }
  return (
    <Fragment>
      <SearchBar placeholder="搜索" maxLength={8} />
      {goodsList.length == 0 ? (
        <NoData>没有更多了</NoData>
      ) : (
        <div>
          <List className="my-list">
            {goodsList.map((goods, index) => {
              return (
                <Item
                  wrap
                  onClick={() => toGoodsDetail(goods.id)}
                  multipleLine
                  thumb={goods.imgUrl}
                  key={index}
                  data-seed="id"
                >
                  {goods.title}
                  <Brief>{goods.description}</Brief>
                  <Brief>库存：{goods.stock}</Brief>
                </Item>
              )
            })}
          </List>
          {goodsList.length < 10 ? <NoData>没有更多了</NoData> : null}
        </div>
      )}
    </Fragment>
  )
}

export default withRouter(GoodsList)
