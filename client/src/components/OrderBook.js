import React from 'react';
import PropTypes from 'prop-types';

const OrderBook = ({ type, orders, market }) => (
  <div className="order-book-table">
    <h1 className="order-book-title">{type} Order Book</h1>
    { orders.length < 1 ? <p>Loading...</p> :
      (
        <table className="table">
          <thead>
            <tr>
              <th>Quantity(BTC)</th>
              <th>Price($)</th>
              <th>Total({market === 1 ? 'ETH' : 'LTC' })</th>
              <th>Exchange(s)</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => (
                <tr className={order.arbitrage ? 'highlight' : null} key={Math.random()}>
                  <td>{order.quantity}</td>
                  <td>{order.rate}</td>
                  <td>{order.quantity * order.rate}</td>
                  <td>{order.exchange}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )
    }
  </div>
);

OrderBook.propTypes = {
  type: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  market: PropTypes.number.isRequired,
};

export default OrderBook;
