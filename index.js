import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { ShoppingIndex } from './SPA/ShoppingIndex';
import { CookiesProvider } from 'react-cookie';


import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <ShoppingIndex />
      </Provider>
    </CookiesProvider>


  </React.StrictMode>
);


reportWebVitals();
