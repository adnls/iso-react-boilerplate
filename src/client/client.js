//statup client side app
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = 
createStore(reducers, 
        window.INITIAL_STATE, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance))); 

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <div>{renderRoutes(Routes)}</div>
        </Router>
    </Provider>,
    document.querySelector('#root')
);