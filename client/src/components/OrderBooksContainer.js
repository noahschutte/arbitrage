import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderBook from './OrderBook';

const OrderBooksContainer = ({ asks, bids }) => (
  <div className="container order-book-container">
    <OrderBook type="Asks" orders={asks} />
    <OrderBook type="Bids" orders={bids} />
  </div>
);

OrderBooksContainer.propTypes = {
  asks: PropTypes.arrayOf(PropTypes.object).isRequired,
  bids: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ orderBooks }) => {
  const { asks, bids } = orderBooks;
  return { asks, bids };
};

export default connect(mapStateToProps)(OrderBooksContainer);
