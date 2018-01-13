const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const orderBooks = require('./src/routes/orderBooks');

app.get('/:market', async (req, res) => {
  const market = req.params.market;
  try {
    const data = await orderBooks.getOrderBooks(market);
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({errorMessage: e.message});
  }
});

app.listen(port);

module.exports = app;
