const orderBooksReducerDefaultState = {
  bids: [],
  asks: [],
};

export default (state = orderBooksReducerDefaultState, action) => {
  const { type, market } = action;
  switch (type) {
    case 'UPDATE_ORDER_BOOKS':
      return market;
    default:
      return state;
  }
};
