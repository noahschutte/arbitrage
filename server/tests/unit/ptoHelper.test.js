const expect = require('expect');
const testData = require('../testData');
const ptoHelper = require('../../src/helpers/ptoHelper');

describe('pto helpers', () => {
  describe('formatBinanceResponse', () => {
    it('should format the asks from Binance', () => {
      const res = ptoHelper.formatBinanceResponse(
        testData.binanceResponse.asks
      );
      expect(res[0]['rate']).toBeA('number');
      expect(res[0]['quantity']).toBeA('number');
      expect(res[0]['exchange']).toBeA('string');
      const formattedResponse = testData.binanceFormatted.asks;
      expect(res).toEqual(formattedResponse);
    });
    it('should format the bids from Binance', () => {
      const res = ptoHelper.formatBinanceResponse(
        testData.binanceResponse.bids
      );
      expect(res[0]['rate']).toBeA('number');
      expect(res[0]['quantity']).toBeA('number');
      expect(res[0]['exchange']).toBeA('string');
      const formattedResponse = testData.binanceFormatted.bids;
      expect(res).toEqual(formattedResponse);
    });
  });

  describe('formatBittrexResponse', () => {
    it('should format the asks from Bittrex', () => {
      const res = ptoHelper.formatBittrexResponse(
        testData.bittrexResponse.result.sell
      );
      expect(res[0]['rate']).toBeA('number');
      expect(res[0]['quantity']).toBeA('number');
      expect(res[0]['exchange']).toBeA('string');
      const formattedResponse = testData.bittrexFormatted.asks;
      expect(res).toEqual(formattedResponse);
    });
    it('should format the bids from Bittrex', () => {
      const res = ptoHelper.formatBittrexResponse(
        testData.bittrexResponse.result.buy
      );
      expect(res[0]['rate']).toBeA('number');
      expect(res[0]['quantity']).toBeA('number');
      expect(res[0]['exchange']).toBeA('string');
      const formattedResponse = testData.bittrexFormatted.bids;
      expect(res).toEqual(formattedResponse);
    });
  });

  describe('formatPoloniexResponse', () => {
    it('should format the asks from Poloniex', () => {
      const res = ptoHelper.formatPoloniexResponse(
        testData.poloniexResponse.asks
      );
      expect(res[0]['rate']).toBeA('number');
      expect(res[0]['quantity']).toBeA('number');
      expect(res[0]['exchange']).toBeA('string');
      const formattedResponse = testData.poloniexFormatted.asks;
      expect(res).toEqual(formattedResponse);
    });
    it('should format the bids from Poloniex', () => {
      const res = ptoHelper.formatPoloniexResponse(
        testData.poloniexResponse.bids
      );
      expect(res[0]['rate']).toBeA('number');
      expect(res[0]['quantity']).toBeA('number');
      expect(res[0]['exchange']).toBeA('string');
      const formattedResponse = testData.poloniexFormatted.bids;
      expect(res).toEqual(formattedResponse);
    });
  });
});
