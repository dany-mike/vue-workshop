

const response = (res, next, rawResponse, status) => {
  res.rawResponse = rawResponse;
  res.rawStatus = status;
  return next();
};

const citiesController = {
  getCityByPostalCode: async (req, res, next) => {
    try {
      const city = 'Paris';
  
      if (!city) return response(res, next, { msg: 'Sorry there is no cities associated at this postal code' }, 400);
  
      response(res, next, { city }, 200);
    }
    catch (err) {
      response(res, next, { msg: err.message }, 500);
    }
  },
  getCities: async (req, res, next) => {
    try {
      const cities = [];
  
      if (!cities) return response(res, next, { msg: 'API was not able to get the cities' }, 400);
  
      response(res, next, { cities }, 200);
    }
    catch (err) {
      response(res, next, { msg: err.message }, 500);
    }
  }
}

module.exports = citiesController;

