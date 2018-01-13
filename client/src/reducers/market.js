const marketReducerDefaultState = 1;

export default (state = marketReducerDefaultState, action) => {
  const { type, market } = action;
  switch (type) {
    case 'CHANGE_MARKET':
      return market;
    default:
      return state;
  }
};
