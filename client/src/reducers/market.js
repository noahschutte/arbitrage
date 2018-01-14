import * as types from '../constants';

const marketReducerDefaultState = 1;

export default (state = marketReducerDefaultState, action) => {
  const { type, market } = action;
  switch (type) {
    case types.UPDATE_MARKET:
      return market;
    default:
      return state;
  }
};
