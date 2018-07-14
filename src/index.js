import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './_reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
     document.getElementById('root'));
registerServiceWorker();
