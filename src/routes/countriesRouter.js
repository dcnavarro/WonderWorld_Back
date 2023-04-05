const {Router} = require ('express');
const {getCountryHandler} = require('../handlers/Countries/getCountryHandler');
const { getCountryByNameHandler } = require('../handlers/Countries/getCountryByNameHandler');

const countriesRouter = Router();

countriesRouter.get('/', getCountryByNameHandler);

countriesRouter.get('/:idCountry', getCountryHandler);

module.exports = {countriesRouter};