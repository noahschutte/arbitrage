import React from 'react';
import { connect } from 'react-redux';

const OrderBook = ({ market }) => (
  <div>
    <p>Order Book</p>
    {market}
  </div>
);

const mapStateToProps = ({ market }) => ({ market });

export default connect(mapStateToProps)(OrderBook);
