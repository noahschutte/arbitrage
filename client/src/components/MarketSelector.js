import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';

import { updateMarket } from '../actions/orderBooks';

const MarketSelector = ({ dispatch, market }) => (
  <div className="market-selector-container">
    <ButtonToolbar className="button-toolbar">
      <Button
        className="button"
        bsSize="large"
        bsStyle={market === 1 ? 'primary' : 'default'}
        disabled={market === 1}
        onClick={() => {
          dispatch(updateMarket(1));
        }}
      >
        BTC - ETH
      </Button>
      <Button
        bsSize="large"
        bsStyle={market === 2 ? 'primary' : 'default'}
        disabled={market === 2}
        onClick={() => {
          dispatch(updateMarket(2));
        }}
      >
        BTC - LTC
      </Button>
    </ButtonToolbar>
  </div>
);

MarketSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  market: PropTypes.number.isRequired,
};

// const mapStateToProps = ({ orderBooks }) => ({ orderBooks });

const mapStateToProps = ({ orderBooks }) => {
  const {
    market,
  } = orderBooks;
  return {
    market,
  };
};

export default connect(mapStateToProps)(MarketSelector);
