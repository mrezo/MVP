var carRouter = require('express').Router();
var carController = require('../controllers/carController.js');

carRouter.route('/') // to all
  .post(carController.createOne)
  .get(carController.retrieveAll)
  .delete(carController.deleteAll);

carRouter.route('/:id') // to one specific
  .get(carController.retrieveOne)
  .delete(carController.deleteOne);

module.exports = carRouter;
