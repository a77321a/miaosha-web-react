/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-29 17:46:19
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-30 17:51:45
 */
import { createStore } from 'redux'
import reducer from './reducer';

const store = createStore(reducer);

export default store