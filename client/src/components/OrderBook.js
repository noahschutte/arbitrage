import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const OrderBook = ({ market }) => (
  <div>
    <p>Order Book</p>
    {market}
  </div>
);

OrderBook.propTypes = {
  market: PropTypes.number.isRequired,
};

const mapStateToProps = ({ market }) => ({ market });

export default connect(mapStateToProps)(OrderBook);
