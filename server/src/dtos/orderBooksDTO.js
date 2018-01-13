const dtoHelper = require('../helpers/dtoHelper');

/**
 * Gets the Binance order books
 * @param {string} firstSymbol the first market symbol
 * @param {string} secondSymbol the second market symbol
 * @return {Promise} Resolves with the order book or rejects with an error
 */
async function getBinanceOrderBook(firstSymbol, secondSymbol) {
  const market = `${secondSymbol}${firstSymbol}`;
  const url = `https://api.binance.com/api/v1/depth?symbol=${market}`;
  return await dtoHelper.getOrderBooksDTO(url, 'Binance');
}

/**
 * Gets the Bittrex order books
 * @param {string} firstSymbol the first market symbol
 * @param {string} secondSymbol the second market symbol
 * @return {Promise} Resolves with the order book or rejects with an error
 */
async function getBittrexOrderBook(firstSymbol, secondSymbol) {
  const market = `${firstSymbol}-${secondSymbol}`;
  const url = `https://bittrex.com/api/v1.1/public/getorderbook?market=${market}&type=both`;
  return await dtoHelper.getOrderBooksDTO(url, 'Bittrex');
}

/**
 * Gets the Poloniex order books
 * @param {string} firstSymbol the first market symbol
 * @param {string} secondSymbol the second market symbol
 * @return {Promise} Resolves with the order book or rejects with an error
 */
async function getPoloniexOrderBook(firstSymbol, secondSymbol) {
  const market = `${firstSymbol}_${secondSymbol}`;
  const url = `https://poloniex.com/public?command=returnOrderBook&currencyPair=${market}`;
  return await dtoHelper.getOrderBooksDTO(url, 'Poloniex');
}

module.exports = {
  getBinanceOrderBook,
  getBittrexOrderBook,
  getPoloniexOrderBook,
};
