import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/Store';
import reducers from './redux/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);

