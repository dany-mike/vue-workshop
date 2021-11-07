const fs = require('fs');

const cityController = {
  getCityByPostalCode: async (req, res) => {
    const postalCodesData = './data/postal-codes.json'

    await fs.readFile(postalCodesData, 'utf-8', (err, postalCodes) => {
      if (err) {
        throw err;
      }
      const parsedPostalCodes = JSON.parse(postalCodes);

      const filteredPostalCode = Object.fromEntries(Object.entries(parsedPostalCodes).filter(([key]) => key.includes(req.body.postalCode)));

      res.json(filteredPostalCode);
    });

  }
}

module.exports = cityController;

