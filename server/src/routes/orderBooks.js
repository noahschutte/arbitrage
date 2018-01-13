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

  return combinedOrderBook;
}

module.exports = {
  getOrderBooks,
};
