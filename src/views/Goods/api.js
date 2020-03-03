/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-02-27 13:55:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-29 18:22:01
 */
import http from '../../common/js/axios'

export function getGoodsList () {
  return http.get('/goods/list')
}
export function getGoodsInfo (param) {
  return http.get('/goods/get', param)
}
export function createOrder (param) {
  return http.post('/order/createOrder', param)
}