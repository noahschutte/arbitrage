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
  combinedOrderBook.sortAndReduceOrderBook();
  combinedOrderBook.applyHighlight();

  return combinedOrderBook;
}

module.exports = {
  getOrderBooks,
};
