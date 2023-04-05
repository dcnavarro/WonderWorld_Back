const axios = require ('axios');
const {Country} = require('../../db');
const {getAllCountriesFromDb} = require ('./getAllCountriesFromDb');
 
const getAllCountries = async () =>{
    try{ 
    let countries = [];
    const apiData = await axios.get(`https://restcountries.com/v3/all`);
    countries.push(apiData)
    
    countries = (await Promise.all(countries)).map(res =>
        res.data.map(el =>{
            return({
                id: el.cca3,
                name: el.name.common,
                nationalFlag: el.flags[0]?el.flags[0]:el.flags[1],
                continent: el.continents[0],
                capital: el.capital?el.capital[0]:'Capital not found', 
                subregion: el.subregion?el.subregion:'Subregion not found',
                area: el.area,
                population: el.population
            })
        }));
        
        let allCountries = [];
        countries.map((el) => {
            allCountries = allCountries.concat(el);
        });
        // console.log(allCountries);
        return allCountries;

}catch(error){
    ({error:error.message})
}};

const getApiData = async() =>{
    const allCountries = await getAllCountries();
    const createCountries = await Country.bulkCreate(allCountries, {ignoreDuplicates: true}); 
    const countriesFromDb = await getAllCountriesFromDb();
    return countriesFromDb;
}

module.exports ={
    getApiData
}