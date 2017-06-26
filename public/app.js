import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from '../routes/router';
import React, { Component } from 'react';
import Layout from './layout';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {
	render() {
		return (
		    <Provider store={store}>
	            <Layout>
					{this.props.children}
				</Layout>
			</Provider>
		);
	}
}

export default App;
