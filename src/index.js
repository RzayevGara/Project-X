import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Pages/home.sass"
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import { store } from './Reducer/store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
