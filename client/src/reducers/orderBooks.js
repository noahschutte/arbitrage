import * as types from '../constants';

const orderBooksReducerDefaultState = {
  bids: [],
  asks: [],
};

export default (state = orderBooksReducerDefaultState, action) => {
  const { type, orderBooks } = action;
  switch (type) {
    case types.SET_ORDER_BOOKS:
      return orderBooks;
    default:
      return state;
  }
};
