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
  /**
   * Sort and Reduce order books
   */
  sortAndReduceOrderBook() {
    const asks = ptoHelper.sortOrders(this.asks, 'ascending');
    const bids = ptoHelper.sortOrders(this.bids, 'descending');
    this.asks = ptoHelper.reduceOrders(asks);
    this.bids = ptoHelper.reduceOrders(bids);
  }
};

module.exports = {
  OrderBook,
};
