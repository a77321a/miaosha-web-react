/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-25 14:33:53
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-25 14:36:07
 */
import { CHANGE_VALUE } from './actionTypes'
export const getChangeValue = (value) => ({
  type: CHANGE_VALUE,
  value
})