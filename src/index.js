import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './CartCss.css';
import App from './App';
import combineReducers from './Reducers/index'

const store = createStore(combineReducers)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)