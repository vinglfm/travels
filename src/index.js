import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
