const { Country, Activity } = require('../../db');

const getAllCountriesFromDb = async ()=>{
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
            required: false,
        }
    });
    
}

module.exports = {getAllCountriesFromDb}