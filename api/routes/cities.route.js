const router = require('express').Router();

const { getCities, getCityByPostalCode } = require('../controllers/cities.controller.js');
const serialization = require('../middlewares/serialization.middleware.js');

router.get('/', getCities, serialization);

router.get('/:id', getCityByPostalCode, serialization);

module.exports = router;