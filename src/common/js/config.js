/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-02-27 10:15:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-27 10:16:49
 */
// 定义常量及api接口地址
export const access_token = ''
export const platform = ''

let env = 'develop'
//开发环境、测试环境、生产环境
if (window.location.hostname == 'localhost') {
  env = 'develop'
} else if (window.location.hostname == '') {
  env = 'develop'
} else {
  env = 'product'
}

export const ENV = env

export const HOSTS = {
  develop: {
    api: 'http://localhost:8888/', // 测试环境
    domain: 'http://localhost:8888/',
  },
  product: {
    api: 'http://localhost:8888/',
    domain: 'http://localhost:8888/'
  }
}

export const ROOT = HOSTS[ENV].api

export const API = {
  memberInfo: ''
}