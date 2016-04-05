var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = 8000;
var carRouter = require('./routers/carRouter');
var app = express();

mongoose.connect('mongodb://localhost/myGarage');

app.use(express.static(__dirname + '../../client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/garage', carRouter);

app.get('/api/garage', function(req, res) {
  //change the get endline to the server.
  //call retreive all controller and do stuff
  if (err) {
    console.log(err);
    return;
  }res.json({message: 'SCV READY TO GO'});
});

// app.post(''){
//   callthe create one controller
// }
// // TODO: Use the characterRouter as middleware on the '/api/characters' route

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('My Garage App listening on ' + port);
});  

module.exports = app;
