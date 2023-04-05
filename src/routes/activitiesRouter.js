const {Router} = require ('express');
const {getActivitiesHandler} = require('../handlers/Activities/getActivitiesHandler');
const {validatePostActivity} = require('../utils');
const { postActivityHandler } = require('../handlers/Activities/postActivityHandler');

const activitiesRouter = Router();

activitiesRouter.post('/', validatePostActivity, postActivityHandler);

activitiesRouter.get('/', getActivitiesHandler);

module.exports = {activitiesRouter};