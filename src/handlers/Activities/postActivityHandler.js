const {postActivityController} = require ('../../controllers/Activities/postActivityController');

const postActivityHandler = async (req, res) =>{
    const {name, difficulty, duration, season, idCountry, cost} = req.body;
    try{
        const newActivity = await postActivityController(name, difficulty, duration, season, idCountry, cost);
        res.status(201).json(newActivity);
    }catch(error){
        res.status(400).send({error:error.message})
    }
};

module.exports = {postActivityHandler};