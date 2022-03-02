import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'antd/dist/antd.css'

import App from './App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

const app = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
)
