import React from 'react';
import PropTypes from 'prop-types';

const OrderBook = ({ type, orders }) => {
  const orderType = type;
  return (
    <div className="order-book-table">
      <h1 className="order-book-title">{orderType} Order Book</h1>
      { orders.length < 1 ? <p>Loading...</p> :
        (
          <table className="table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Price</th>
                <th>Exchange</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map(order => (
                  <tr className={order.arbitrage ? 'highlight' : null} key={Math.random()}>
                    <td>{order.quantity}</td>
                    <td>{order.rate}</td>
                    <td>{order.exchange}</td>
                    <td>{order.quantity * order.rate}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  );
};

OrderBook.propTypes = {
  type: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrderBook;
