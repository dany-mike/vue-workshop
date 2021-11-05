const router = require('express').Router();

const { getCityByPostalCode } = require('../controllers/city.controller.js');

router.get('/', getCityByPostalCode);

module.exports = router;