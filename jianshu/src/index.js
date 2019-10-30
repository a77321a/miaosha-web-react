/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-08-15 11:29:33
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-30 17:58:15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './reactCom/TodoList';
// import 'element-theme-default';
// import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './reactStore'


const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
