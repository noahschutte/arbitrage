import * as types from '../constants';

const isProduction = process.env === 'production';
const DB_URL = isProduction ? 'https://arbitrage-server.herokuapp.com' : 'http://localhost:3000';

export function updateMarket(market = 1) {
  return {
    type: types.UPDATE_MARKET,
    market,
  };
}

export function fetchOrderBooksBegin() {
  return {
    type: types.FETCH_ORDER_BOOKS_BEGIN,
  };
}

export function fetchOrderBooksHandleError(errorMessage) {
  return {
    type: types.FETCH_ORDER_BOOKS_HANDLE_ERROR,
    errorMessage,
  };
}

export function fetchOrderBooksComplete(orderBooks) {
  return {
    type: types.FETCH_ORDER_BOOKS_COMPLETE,
    orderBooks,
  };
}

export const fetchOrderBooks = market => (
  (dispatch) => {
    dispatch(fetchOrderBooksBegin());
    const url = `${DB_URL}/${market}`;
    return fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then((responseJSON) => {
        dispatch(fetchOrderBooksComplete(responseJSON));
      })
      .catch((err) => {
        dispatch(fetchOrderBooksHandleError(err.message));
      });
  }
);
