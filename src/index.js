import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './styles/index.css'

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootView
  )
}
