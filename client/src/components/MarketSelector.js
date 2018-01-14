import React from 'react';
import PropTypes from 'prop-types';
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

MarketSelector.propTypes = {
  dispatch: PropTypes.element.isRequired,
  market: PropTypes.element.isRequired,
};

const mapStateToProps = ({ market }) => ({ market });

export default connect(mapStateToProps)(MarketSelector);
