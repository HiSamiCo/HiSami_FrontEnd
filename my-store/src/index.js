import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducer from "./state/reducer"
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

