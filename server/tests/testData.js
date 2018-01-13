const binanceResponse = {
  'lastUpdateId': 1234567890,
  'bids': [
    [
      '0.01700300',
      '4.66000000',
      [],
    ],
  ],
  'asks': [
    [
      '0.01700400',
      '0.01000000',
      [],
    ],
  ],
};

const binanceFormatted = {
  'bids': [
    {
      'rate': 0.017003,
      'quantity': 4.66,
      'exchange': 'binance',
    },
  ],
  'asks': [
    {
      'rate': 0.017004,
      'quantity': 0.01,
      'exchange': 'binance',
    },
  ],
};

const bittrexResponse = {
  'success': true,
  'message': '',
  'result': {
    'buy': [
      {
        'Quantity': 26.74259701,
        'Rate': 0.017,
      },
    ],
    'sell': [
      {
        'Quantity': 5.3920862,
        'Rate': 0.01701,
      },
    ],
  },
};

const bittrexFormatted = {
  'bids': [
    {
      'rate': 0.017,
      'quantity': 26.74259701,
      'exchange': 'bittrex',
    },
  ],
  'asks': [
    {
      'rate': 0.01701,
      'quantity': 5.3920862,
      'exchange': 'bittrex',
    },
  ],
};

const poloniexResponse = {
  'asks': [
    [
      '0.01706025',
      26.95000231,
    ],
  ],
  'bids': [
    [
      '0.01705009',
      48.72361389,
    ],
  ],
  'isFrozen': '0',
  'seq': 1234567890,
};

const poloniexFormatted = {
  'bids': [
    {
      'rate': 0.01705009,
      'quantity': 48.72361389,
      'exchange': 'poloniex',
    },
  ],
  'asks': [
    {
      'rate': 0.01706025,
      'quantity': 26.95000231,
      'exchange': 'poloniex',
    },
  ],
};

module.exports = {
  binanceResponse,
  binanceFormatted,
  bittrexResponse,
  bittrexFormatted,
  poloniexResponse,
  poloniexFormatted,
};
