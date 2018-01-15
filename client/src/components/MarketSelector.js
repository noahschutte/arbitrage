import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateMarket } from '../actions/orderBooks';

const MarketSelector = ({ dispatch }) => (
  <div className="market-selector-container">
    <div>
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
  </div>
);

MarketSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ orderBooks }) => ({ orderBooks });

export default connect(mapStateToProps)(MarketSelector);
