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

/**
 * Normalizes Poloniex orders to a standard format
 * @param {Array} orders
 * @return {Array} Returns an array of normalized orders
 */
function reduceOrders(orders) {
  const ordersPriceMap = {};
  orders.map((order) => {
    if (ordersPriceMap[order.rate]) {
      ordersPriceMap[order.rate].push(order);
    } else {
      ordersPriceMap[order.rate] = [order];
    }
  });
  const orderPriceKeys = Object.entries(ordersPriceMap);
  const orderArray = orderPriceKeys.map((rate) => {
    return {
      rate: rate[0],
      quantity: rate[1].reduce((previous, order) => {
        return previous + order.quantity;
      }, 0),
      exchange: rate[1].reduce((previous, order) => {
        if (previous) {
          return previous + ', ' + order.exchange;
        } else {
          return previous + order.exchange;
        }
      }, ''),
    };
  });
  return orderArray;
}

/**
 * Normalizes Poloniex orders to a standard format
 * @param {Array} orders
 * @param {String} sortDirection
 * @return {Array} Returns an array of normalized orders
 */
function sortOrders(orders, sortDirection) {
  if (sortDirection === 'ascending') {
    // Sort the asks order book by ascending price
    return orders.sort((a, b) => a.rate - b.rate);
  } else {
    // Sort the bids order book by descending price
    return orders.sort((a, b) => b.rate - a.rate);
  }
}

module.exports = {
  formatBinanceResponse,
  formatBittrexResponse,
  formatPoloniexResponse,
  reduceOrders,
  sortOrders,
};
