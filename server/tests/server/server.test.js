const request = require('supertest');
const expect = require('expect');
const app = require('../../server');

describe('server', () => {
  describe('GET /', () => {
    it('should return an order book of bids and asks', (done) => {
      request(app)
      .get('/2')
      .expect(200)
      .expect((res) => {
        expect(res.body)
          .toIncludeKeys(['bids', 'asks']);
        expect(res.body.bids[0])
          .toIncludeKeys(['rate', 'quantity', 'exchange']);
        expect(res.body.asks[0])
          .toIncludeKeys(['rate', 'quantity', 'exchange']);
      })
      .end(done);
    });
  });
});
