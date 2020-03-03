import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../App'
import Login from '../views/Login/Login'
import GoodsList from '../views/Goods/GoodsList.jsx'
import GoodsDetail from '../views/Goods/GoodsDetail.jsx'

const BasicRoute = props => {
  let AppRouter = (
    <App>
      <Switch>
        <Route exact path="/"></Route>
        <Route title="登录" exact path="/login" component={Login}></Route>
        <Route
          title="商品列表"
          exact
          path="/goods"
          render={props => <GoodsList {...props} />}
          component={GoodsList}
        ></Route>
        <Route
          title="商品详情"
          key="商品详情"
          exact
          path="/goodsDetail/:id"
          render={props => <GoodsDetail {...props} />}
        ></Route>
      </Switch>
    </App>
  )
  return (
    <Router>
      {/* <IndexRoute></IndexRoute> */}
      <Switch>
        <Route path="/" render={props => AppRouter}></Route>
      </Switch>
    </Router>
  )
}

export default BasicRoute
