/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import orderBooksReducer from '../reducers/orderBooks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      orderBooks: orderBooksReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
