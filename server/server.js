var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = 8000;

var carRouter = require('./routers/carRouter');
var app = express();

mongoose.connect('mongodb://localhost/myGarageApp');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'SCV READY TO GO'});
});

// // TODO: Use the characterRouter as middleware on the '/api/characters' route

// app.use('/api/characters', characterRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('My Garage App listening on ' + port);
});  

module.exports = app;
