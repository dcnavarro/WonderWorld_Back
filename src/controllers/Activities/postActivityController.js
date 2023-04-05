const {Country, Activity} = require('../../db');

const postActivityController = async (name, difficulty, duration, season, idCountry, cost) =>{
    let newActivity = await Activity.create({
        name,
        difficulty,
        duration, 
        season,
        cost,
    })

    let countryDb = await Country.findAll({
        where: {id: idCountry}
    })

    newActivity.addCountry(countryDb);

    return newActivity;
}

module.exports = {postActivityController};