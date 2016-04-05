var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
  make: String,
  model: String
});

var Vehicle = mongoose.model('Vehicle', carSchema);

module.exports = Vehicle;