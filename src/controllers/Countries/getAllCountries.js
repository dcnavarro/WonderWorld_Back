const {getApiData} = require ('../../controllers/Countries/getApiData');

const getAllCountries = async () =>{
    const apiData = await getApiData()
    return apiData;
}

module.exports = {getAllCountries};