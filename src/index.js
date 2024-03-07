import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "mobx-react";
import App from './App'

import './styles/index.css'
import store from "./store/BasketStore";

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
      <App />
        </Provider>
    </React.StrictMode>,
    rootView
  )
}
