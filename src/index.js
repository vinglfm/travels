import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
     document.getElementById('root'));
registerServiceWorker();
