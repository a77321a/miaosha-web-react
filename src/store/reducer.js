/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-29 11:05:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-29 14:42:26
 */


import { changeHeaderBar, changeFooterShow } from './actionTypes'

const defaultState = {
  headerBarName: '',
  showFooter: true,
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === changeHeaderBar) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.headerBarName = action.value
    return newState
  }
  if (action.type === changeFooterShow) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.showFooter = action.value
    return newState
  }
  return state
}