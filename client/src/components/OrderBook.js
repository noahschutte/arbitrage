import React from 'react';
import PropTypes from 'prop-types';

const OrderBook = ({ type, orders }) => {
  const orderType = type;
  return (
    <div className="container order-book-table">
      <p>{orderType} Order Book</p>
      { orders.length < 1 ? <p>Loading...</p> :
        (
          <table>
            <tbody>
              <tr>
                <th>Quantity</th>
                <th>Price</th>
                <th>Exchange</th>
                <th>Total</th>
              </tr>
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
