import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes'
import styled, {ThemeProvider} from 'styled-components'

// establishes socket connection
import './socket'

export const theme = {
  white: 'white',
  lightgrey: '#3f4649',
  darkgrey: '#2d2f31',
  darkgreyhover: '#2c3835',
  green: '#23a86d',
  greenhover: '#209360'
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
