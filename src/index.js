import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
import thunk from 'redux-thunk'

import App from './App';

let store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
