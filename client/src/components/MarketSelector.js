import React from 'react';
import { connect } from 'react-redux';

import editMarket from '../actions/market';

const MarketSelector = ({ dispatch, market }) => (
  <div>
    <button
      onClick={() => {
        dispatch(editMarket(1));
      }}
    >
      BTC - ETH
    </button>
    <button
      onClick={() => {
        dispatch(editMarket(2));
      }}
    >
      BTC - LTC
    </button>
    <div>{market}</div>
  </div>
);

const mapStateToProps = ({ market }) => ({ market });

export default connect(mapStateToProps)(MarketSelector);
