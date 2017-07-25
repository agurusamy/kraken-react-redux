import React, { Component } from 'react';
import Layout from '../components/Layout';
import configureStore from '../store/index';
import { Provider } from 'react-redux';

let store = configureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Layout label="PayPal" store={store} {...this.props}/>
        </Provider>
    );
  }

}

export default App;
