import React, { useState, Fragment } from 'react'
import { Logo, FormWrap } from './style'
import * as api from './api'
import { useHistory } from 'react-router-dom'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile'
const Login = props => {
  const [mobile, setMobile] = useState(18661415132)
  const [password, setPassword] = useState(123456)
  const history = useHistory()
  localStorage.clear()
  const login = () => {
    api.loginApi({ mobile: mobile, password: password }).then(res => {
      if (res.code === 200) {
        localStorage.setItem('token', res.data)
        history.push('/goods')
      }
    })
  }
  return (
    <Fragment>
      <Logo>LOGO</Logo>
      <FormWrap>
        <ul>
          <li>
            <input
              type="tel"
              defaultValue={mobile}
              onChange={e => setMobile(e.target.value)}
              placeholder="请输入您的手机号"
            />
          </li>
          <li>
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              name="password"
              defaultValue={password}
              placeholder="请输入密码"
            />
          </li>
        </ul>
        <WhiteSpace />
        <WingBlank>
          <Button onClick={login} type="primary">
            登 录
          </Button>
        </WingBlank>
        {/* <div onClick={login} className="button text-center block">
          登 录
        </div> */}
      </FormWrap>
    </Fragment>
  )
}
export default Login
