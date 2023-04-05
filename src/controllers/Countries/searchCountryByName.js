const { Op } = require('sequelize');
const { Country, Activity } = require('../../db');

const searchCountryByName = async (name) => {
  const foundCountry = [];
  const dbCountries = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: {
      model: Activity,
      attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
      required: false,
    },
  }).then((data) => {
    data.forEach((element) => {
    foundCountry.push((element.toJSON()));
      
    });
  });
  console.log(foundCountry);
  return foundCountry?foundCountry:"Country not found";
};

module.exports = { searchCountryByName };
