var Car = require('../models/Car.js');

exports.createOne = function(req, res) {
  var newCar = req.body;
  Car.create(newCar, function(err, newCar){
    if(err){
      return res.json(err);
    }
    res.json(newCar);
  });
};

exports.retrieveOne = function(req, res) {
  var query = {_id: req.params.id};
  Car.findOne(query, function(err, matchingCar){
    if(err){
      return res.json(err);
    } 
    res.json(matchingCar);  
  });
};

exports.retrieveAll = function(req, res) {
  var query = req.query;
  Car.find(query, function(err, allCars){
    if(err){
      return res.json(err);
    } 
    res.json(allCars);
  });
}

exports.deleteOne = function(req, res) {
  var query = {_id: req.params.id};
  Car.findOneAndRemove(query, function(err, matchingCar){
    if(err){
      return res.json(err);
    } 
    res.json(matchingCar);
  });
}

exports.deleteAll = function(req, res) {
  var query = req.query;
  Car.find(query, function(err, allCars){
    if(err){
      return res.json(err);
    } 
    Car.remove(query, function(err){
      if (err){
        return res.json(err);
      }
      res.json(allCars);
    })
  });
};
