import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux'
import "./styles.css";
import "./babel.js"
import "./test.ts"

ReactDOM.render(
    <Provider store={store}>
      <App/>,
    </Provider>,
   document.getElementById('root')
 );