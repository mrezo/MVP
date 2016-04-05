var carRouter = require('express').Router();
var carController = require('../controllers/carController.js');

carRouter.route('/') // to all
  .post(characterController.createOne)
  .get(characterController.retrieveAll)
  .delete(characterController.deleteAll);

carRouter.route('/:id') // to one specific
  .get(characterController.retrieveOne)
  .put(characterController.updateOne)
  .delete(characterController.deleteOne);

module.exports = carRouter;
