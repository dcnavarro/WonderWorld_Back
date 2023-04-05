const {Country, Activity} = require('../../db');

const getAllActivities = async () =>{

   const activities = await Activity.findAll(
        {
            include: {
                model: Country,
                attributes: ['id', 'name']
            }
        }
        );

    return activities;
}

module.exports = {getAllActivities}