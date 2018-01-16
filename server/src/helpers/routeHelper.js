/**
 * Assigns the market abbreviation
 * @param {String} position
 * @param {String} market
 * @return {String} Resolves with market or rejects with an error
 */
function getSymbol(position, market) {
  const marketOne = ['BTC', 'ETH'];
  const marketTwo = ['BTC', 'LTC'];
  if (market === '1') {
    return marketOne[position];
  } else if (market === '2') {
    return marketTwo[position];
  }
}

module.exports = {
  getSymbol,
};
