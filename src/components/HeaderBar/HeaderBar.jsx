import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import store from '../../store'

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`

const HeaderBar = props => {
  const history = useHistory()
  const [headerTitle, setHeaderTitle] = React.useState('')
  store.subscribe(() => {
    let headerName = store.getState().headerBarName
    setHeaderTitle(headerName)
  })
  React.useEffect(() => {})

  const goBack = () => {
    history.go(-1)
  }

  return (
    <NavBar
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={goBack}
      rightContent={[<Icon key="1" type="ellipsis" />]}
    >
      {headerTitle}
    </NavBar>
  )
}

export default HeaderBar
