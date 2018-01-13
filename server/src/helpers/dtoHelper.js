const axios = require('axios');

/**
 * Dynamically fetches an order book with a provided url
 * @param {String} url
 * @param {String} exchange
 * @return {Promise} Resolves with response data or rejects with an error
 */
async function getOrderBooksDTO(url, exchange) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new Error(`Request to ${exchange} exchange failed.`);
  }
}

module.exports = {
  getOrderBooksDTO,
};
