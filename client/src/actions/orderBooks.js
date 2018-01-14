import * as types from '../constants';

const isProduction = process.env === 'production';
const DB_URL = isProduction ? 'https://arbitrage-server.herokuapp.com/' : 'http://localhost:3000';

export function setOrderBooks(orderBooks) {
  return {
    type: types.SET_ORDER_BOOKS,
    orderBooks,
  };
}

export const fetchOrderBooksBegin = market => (
  (dispatch) => {
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
        dispatch(setOrderBooks(responseJSON));
      })
      .catch(err => alert(err));
  }
);
