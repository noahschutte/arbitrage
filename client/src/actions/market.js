import * as types from '../constants';

const updateMarket = (market = 1) => ({
  type: types.UPDATE_MARKET,
  market,
});

export default updateMarket;
