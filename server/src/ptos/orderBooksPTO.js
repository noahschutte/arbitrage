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

  /**
   * Apply highlight to order books
   * Breaks out of loop if element in array does not have arbitrage opportunity
   */
  applyHighlight() {
    let z = false;
    for (let x = 0; x < this.asks.length; x++) {
      if (z) {
        break;
      }
      for (let y = 0; y < this.bids.length; y++) {
        if (this.asks[x].rate <= this.bids[y].rate) {
          this.asks[x].arbitrage = true;
          this.bids[y].arbitrage = true;
        } else {
          if (y === 0) {
            z = true;
          }
          break;
        }
      }
    }
  }
};

module.exports = {
  OrderBook,
};
