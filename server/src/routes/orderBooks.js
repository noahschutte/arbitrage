const orderBooksDTO = require('../dtos/orderBooksDTO');
const orderBooksPTO = require('../ptos/orderBooksPTO');
const routeHelpers = require('../helpers/routeHelper');

/**
 * Retrieves, combines, and sorts order books from multiple exchanges
 * @param {string} market
 * @return {Object} Returns the order books or rejects with an error
 */
async function getOrderBooks(market) {
  const firstSymbol = routeHelpers.getSymbol(0, market);
  const secondSymbol = routeHelpers.getSymbol(1, market);
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
