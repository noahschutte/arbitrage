import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import updateMarket from '../actions/market';

const MarketSelector = ({ dispatch }) => (
  <div className="container market-selector-container">
    <button
      onClick={() => {
        dispatch(updateMarket(1));
      }}
    >
      BTC - ETH
    </button>
    <button
      onClick={() => {
        dispatch(updateMarket(2));
      }}
    >
      BTC - LTC
    </button>
  </div>
);

MarketSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ market }) => ({ market });

export default connect(mapStateToProps)(MarketSelector);
