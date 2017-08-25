import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initialState) {
  let createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
  const store = createStoreWithMiddleware(reducers, initialState);
  return store;
}
