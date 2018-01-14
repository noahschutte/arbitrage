const orderBooksDTO = require('../dtos/orderBooksDTO');
const orderBooksPTO = require('../ptos/orderBooksPTO');

/**
 * Retrieves, combines, and sorts order books from multiple exchanges
 * @param {string} market
 * @return {Object} Returns the order books or rejects with an error
 */
async function getOrderBooks(market) {
  let firstSymbol;
  let secondSymbol;
  switch (market) {
    case '1':
      firstSymbol = 'BTC';
      secondSymbol = 'ETH';
      break;
    case '2':
      firstSymbol = 'BTC';
      secondSymbol = 'LTC';
      break;
    default:
      firstSymbol = 'BTC';
      secondSymbol = 'ETH';
      break;
  }
  const promiseArray = [
    orderBooksDTO.getBinanceOrderBook(firstSymbol, secondSymbol),
    orderBooksDTO.getBittrexOrderBook(firstSymbol, secondSymbol),
    orderBooksDTO.getPoloniexOrderBook(firstSymbol, secondSymbol),
  ];
  const orderBooks = await Promise.all(promiseArray);
  const combinedOrderBook = new orderBooksPTO.OrderBook(orderBooks);
  // Sort the asks order book by ascending price
  combinedOrderBook.asks.sort((a, b) => a.rate - b.rate);
  // Sort the bids order book by descending price
  combinedOrderBook.bids.sort((a, b) => b.rate - a.rate);
  // console.log('combinedOrderBook: ', combinedOrderBook);

  const asksPriceMap = {};
  combinedOrderBook.asks.map((ask) => {
    if (asksPriceMap[ask.rate]) {
      asksPriceMap[ask.rate].push(ask);
    } else {
      asksPriceMap[ask.rate] = [ask];
    }
  });
  const askPriceKeys = Object.entries(asksPriceMap);
  const askOrderArray = askPriceKeys.map((rate) => {
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
  const bidsPriceMap = {};
  combinedOrderBook.bids.map((bid) => {
    if (bidsPriceMap[bid.rate]) {
      bidsPriceMap[bid.rate].push(bid);
    } else {
      bidsPriceMap[bid.rate] = [bid];
    }
  });
  const bidPriceKeys = Object.entries(bidsPriceMap);
  const bidOrderArray = bidPriceKeys.map((rate) => {
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

  const reducedOrderBook = {
    asks: askOrderArray,
    bids: bidOrderArray,
  };

  return reducedOrderBook;
}

module.exports = {
  getOrderBooks,
};
