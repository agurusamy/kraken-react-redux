import React from 'react';
import routes from './routes';
import Client from  'react-engine/lib/client';
import './css/materialize.css';
import './css/react-range.css';
import './css/style.css';

// boot options
let options = {
    react: React,
    routes: routes,
    reduxStoreInitiator: store,
    viewResolver: viewName => require(`./components/${viewName}`)
};

(function bootLoader() {
  if (document.readyState === 'complete') {
    // remove all handlers that were set so that we dont keep
    // hitting boot loader for any future DOM `readyState` changes.
    document.onreadystatechange = null;
    Client.boot(options);
  }

  // if the readyState is not `complete`, attach self
  // or this function as the onreadystatechange handler.
  document.onreadystatechange = bootLoader;
}());
