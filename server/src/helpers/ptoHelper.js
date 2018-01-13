/**
 * Normalizes Binance orders to a standard format
 * @param {Array} orders
 * @return {Array} Returns an array of normalized orders
 */
function formatBinanceResponse(orders) {
  return orders.map((order) => {
    return {
      rate: Number(order[0]),
      quantity: Number(order[1]),
      exchange: 'binance',
    };
  });
}

/**
 * Normalizes Bittrex orders to a standard format
 * @param {Array} orders
 * @return {Array} Returns an array of normalized orders
 */
function formatBittrexResponse(orders) {
  return orders.map((order) => {
    return {
      rate: order['Rate'],
      quantity: order['Quantity'],
      exchange: 'bittrex',
    };
  });
}

/**
 * Normalizes Poloniex orders to a standard format
 * @param {Array} orders
 * @return {Array} Returns an array of normalized orders
 */
function formatPoloniexResponse(orders) {
  return orders.map((order) => {
    return {
      rate: Number(order[0]),
      quantity: order[1],
      exchange: 'poloniex',
    };
  });
}

module.exports = {
  formatBinanceResponse,
  formatBittrexResponse,
  formatPoloniexResponse,
};
