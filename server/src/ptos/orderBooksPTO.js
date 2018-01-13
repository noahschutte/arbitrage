const ptoHelper = require('../helpers/ptoHelper');

/**
 * OrderBook class
 */
class OrderBook {
  /**
   * @param {Object} orderBooks
   */
  constructor(orderBooks) {
    this.asks = [
      ...ptoHelper.formatBinanceResponse(orderBooks[0].asks),
      ...ptoHelper.formatBittrexResponse(orderBooks[1].result.sell),
      ...ptoHelper.formatPoloniexResponse(orderBooks[2].asks),
    ];
    this.bids = [
      ...ptoHelper.formatBinanceResponse(orderBooks[0].bids),
      ...ptoHelper.formatBittrexResponse(orderBooks[1].result.buy),
      ...ptoHelper.formatPoloniexResponse(orderBooks[2].bids),
    ];
  }
};

module.exports = {
  OrderBook,
};
