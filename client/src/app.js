import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { fetchOrderBooksBegin } from './actions/orderBooks';

const store = configureStore();

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(App, document.getElementById('app'));

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

const requestLoop = () => setInterval(() => {
  const { market } = store.getState();
  store.dispatch(fetchOrderBooksBegin(market)).then(() => {
    ReactDOM.render(App, document.getElementById('app'));
  });
}, 3000);

requestLoop();
