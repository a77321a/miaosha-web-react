/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-26 22:15:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-26 22:23:34
 */
import http from '../../common/js/axios';

export const loginApi = (param) => {
  return http.post('/user/login', param)
}