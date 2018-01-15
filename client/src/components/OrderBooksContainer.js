import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderBook from './OrderBook';

const OrderBooksContainer = ({
  market, asks, bids, isFetching,
}) => (
  <div className="order-book-container">
    <OrderBook type="Asks" market={market} orders={asks} isFetching={isFetching} />
    <OrderBook type="Bids" market={market} orders={bids} isFetching={isFetching} />
  </div>
);

OrderBooksContainer.propTypes = {
  market: PropTypes.number.isRequired,
  asks: PropTypes.arrayOf(PropTypes.object).isRequired,
  bids: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ orderBooks }) => {
  const {
    market, asks, bids, isFetching,
  } = orderBooks;
  return {
    market, asks, bids, isFetching,
  };
};

export default connect(mapStateToProps)(OrderBooksContainer);
