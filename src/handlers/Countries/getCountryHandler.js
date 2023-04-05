const {getCountryController} = require ('../../controllers/Countries/getCountryController');

const getCountryHandler = async (req,res) =>{
    const {idCountry} = req.params;
    console.log(idCountry);

    try{
        const country = await getCountryController(idCountry);
        res
        .writeHead(200, {"Content-type":"application/json"})
        .end(JSON.stringify(country))
    }catch(error){
        return res.status(400).send({error:error.message})
    }
}

module.exports ={getCountryHandler};