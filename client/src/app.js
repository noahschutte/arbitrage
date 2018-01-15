import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { fetchOrderBooks } from './actions/orderBooks';

const store = configureStore();

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));

const requestLoop = () => setInterval(() => {
  const { market } = store.getState();
  store.dispatch(fetchOrderBooks(market));
}, 2000);

requestLoop();
