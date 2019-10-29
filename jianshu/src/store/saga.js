/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-28 15:51:55
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-29 09:04:46
 */
import axios from 'axios'

import { takeEvery, put } from 'redux-saga/effects'
import { CHANGE_VALUE } from './actionTypes'
function* fetchUser () {
  try {
    const res = yield axios.get('http://neix1un21.admin.baijiayun.com/api/statisticexam')
    const action = { type: 'AXIOS_VALUE', value: res }
    console.log(action)
    yield put(action)
  }
  catch (e) {
    console.log('wwwwww')
  }
}


function* saga () {
  yield takeEvery(CHANGE_VALUE, fetchUser)
}

export default saga

