const express = require('express');
const Log = require('log');

const app = express();
const log = new Log('info');
const orderBooks = require('./src/routes/orderBooks');
const port = process.env.PORT || 3000;

app.get('/:market', async (req, res) => {
  const market = req.params.market;
  try {
    const data = await orderBooks.getOrderBooks(market);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({errorMessage: e.message});
  }
});

app.listen(port, () => {
  log.info(`Server is running on port: ${port}`);
});

module.exports = app;
