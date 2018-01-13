import { createStore, combineReducers } from 'redux';
import marketReducer from '../reducers/market';
import orderBooksReducer from '../reducers/orderBooks';

export default () => {
  const store = createStore(
    combineReducers({
      market: marketReducer,
      orderBooks: orderBooksReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
