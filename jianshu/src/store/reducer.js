/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-25 10:12:14
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-28 17:32:05
 */
import { CHANGE_VALUE } from './actionTypes'
const defaultState = {
  show: ''
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.show = action.value
    return newState
  }
  if (action.type === 'AXIOS_VALUE') {
    console.log('axios')
    const newState = JSON.parse(JSON.stringify(state))
    newState.show = action.value.statusText
    return newState
  }
  return state
}