import * as types from '../constants';

const orderBooksReducerDefaultState = {
  market: 1,
  bids: [],
  asks: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = orderBooksReducerDefaultState, action) => {
  const { type, orderBooks, errorMessage } = action;
  switch (type) {
    case types.UPDATE_MARKET:
      return {
        ...orderBooksReducerDefaultState,
        market: action.market,
      };
    case types.FETCH_ORDER_BOOKS_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_ORDER_BOOKS_COMPLETE:
      return {
        ...state,
        asks: [...orderBooks.asks],
        bids: [...orderBooks.bids],
        isFetching: false,
        errorMessage: '',
      };
    case types.FETCH_ORDER_BOOKS_HANDLE_ERROR:
      return {
        ...state,
        errorMessage,
      };
    default:
      return state;
  }
};
