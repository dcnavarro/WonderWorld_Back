const { Country, Activity } = require('../../db');

const getCountryController = async (idCountry) => {
  const foundCountry = [];
  const country = await Country.findByPk(idCountry, {
    include: {
      model: Activity,
      attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
      required: false,
    },
  });
  
  foundCountry.push(country.toJSON());
   
  return foundCountry?foundCountry:'Country not found';
};

module.exports = { getCountryController };

