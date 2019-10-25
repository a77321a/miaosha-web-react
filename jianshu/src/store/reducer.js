/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-25 10:12:14
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-25 17:03:07
 */
import { CHANGE_VALUE } from './actionTypes'
const defaultState = {
  show: {}
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.show = action.value
    console.log(action)
    return newState
  }
  return state
}