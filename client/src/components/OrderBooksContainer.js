import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderBook from './OrderBook';

const OrderBooksContainer = ({ asks, bids, isFetching }) => (
  <div className="order-book-container">
    <OrderBook type="Asks" orders={asks} isFetching={isFetching} />
    <OrderBook type="Bids" orders={bids} isFetching={isFetching} />
  </div>
);

OrderBooksContainer.propTypes = {
  asks: PropTypes.arrayOf(PropTypes.object).isRequired,
  bids: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ orderBooks }) => {
  const { asks, bids, isFetching } = orderBooks;
  return { asks, bids, isFetching };
};

export default connect(mapStateToProps)(OrderBooksContainer);
