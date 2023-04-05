const {getAllCountries} = require('../../controllers/Countries/getAllCountries');
const {searchCountryByName} = require ('../../controllers/Countries/searchCountryByName');

const getCountryByNameHandler = async (req, res) =>{
    try{
        const{name} = req.query;
        console.log(name);

        const results = name? await searchCountryByName(name) :
        await getAllCountries ();
        
        res.status(200).json(results);
        

    }catch(error){
        return res.status(400).send({error:error.message})
    }
};

module.exports = {getCountryByNameHandler}