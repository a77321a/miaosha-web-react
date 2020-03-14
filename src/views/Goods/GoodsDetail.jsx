import React from 'react'
import { Carousel, Toast } from 'antd-mobile'
import CounterSecond from './CounterSecond/CounterSecond'
import { getGoodsInfo, createOrder } from './api.js'
import { changeHeaderBar, changeFooterShow } from '../../store/actionTypes'
import store from '../../store'
import { Goods } from './style'
import { FooterWrap } from './style'

function GoodsDetail(props) {
  const [goodsInfo, setGoodsInfo] = React.useState({ title: '' })
  let { match } = props
  let id = match.params.id
  React.useEffect(() => {
    store.dispatch({
      type: changeHeaderBar,
      value: '商品详情'
    })
    store.dispatch({
      type: changeFooterShow,
      value: false
    })
    getGoodsDetail()
    return () => {
      store.dispatch({
        type: changeFooterShow,
        value: true
      })
    }
  }, [])
  const getGoodsDetail = _ => {
    getGoodsInfo({ id: id }).then(res => {
      if (res.code == 200) {
        setGoodsInfo({ ...res.data })
      }
    })
  }

  const clickBuy = val => {
    createOrder({ goodsId: id, amount: 1, promoId: goodsInfo.promoId }).then(
      res => {
        if (res.code == 200) {
          Toast.success('Load success !!!', 3, () => {
            getGoodsDetail()
          })
        }
      }
    )
  }

  return (
    <Goods>
      {goodsInfo.id ? (
        <React.Fragment>
          <Carousel autoplayInterval={3000} autoplay={true} infinite>
            {[1, 2, 3].map(val => (
              <img
                key={val}
                src={goodsInfo.imgUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: '60vh' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'))
                }}
              />
            ))}
          </Carousel>
          <div className="main">
            {goodsInfo.promoStatus != 0 ? (
              <div className="prom-time">
                <CounterSecond seconds={goodsInfo.startTime} />
              </div>
            ) : null}
            <h1>{goodsInfo.title}</h1>
            <div className="price">￥{goodsInfo.price}</div>
            <p>库存：{goodsInfo.stock}</p>
            <p>销量：{goodsInfo.sales}</p>
          </div>
        </React.Fragment>
      ) : null}
      <FooterWrap>
        <div className="ico-btn"></div>
        <div className="ico-btn"></div>
        <div className="ico-btn"></div>
        <button
          disabled={goodsInfo.promoStatus == 2 ? false : true}
          className="box-btn cart"
        >
          秒杀：{goodsInfo.promoPrice}
        </button>
        <div className="box-btn buy" onClick={() => clickBuy()}>
          立即购买
        </div>
      </FooterWrap>
    </Goods>
  )
}

export default GoodsDetail
