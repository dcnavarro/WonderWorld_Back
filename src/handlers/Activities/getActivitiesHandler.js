const {getAllActivities} = require ('../../controllers/Activities/getAllActivities');

const getActivitiesHandler = async (req,res) =>{
    try{
        let activitiesTotal = await getAllActivities();
        res.status(200).json(activitiesTotal);
    }catch(error){
        res.status(404).send('Activity not found')
    }
}

module.exports = {getActivitiesHandler}