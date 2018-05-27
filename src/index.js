import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <App />,
     document.getElementById('root'));
registerServiceWorker();
