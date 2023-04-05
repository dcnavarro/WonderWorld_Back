const validatePostActivity = (req, res, next) => {

    const {name, difficulty, duration, season, idCountry, cost} = req.body;

    if(!name) return res.status(404).json({error: 'Required information is missing: name'});
    if(!difficulty) return res.status(404).json({error: 'Required information is missing: difficulty'});
    if(!duration) return res.status(404).json({error: 'Required information is missing: duration'});
    if(!season) return res.status(404).json({error: 'Required information is missing: season'});
    if(!idCountry) return res.status(404).json({error: 'Required information is missing: countryId'});
    if(!cost) return res.status(404).json({error: 'Required information is missing: cost'});

    next();

};

module.exports = {validatePostActivity};