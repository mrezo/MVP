var app = angular.module('myGarageApp', []);

app.controller('carController', function($scope, $http) {

  $scope.garage = [];

  $scope.clearGarage = function(){};

  $scope.fetch = function() {
    $http.get('http://api.edmunds.com/api/vehicle/v2/' + $scope.search +'/models?fmt=json&api_key=w3qpygvj3j3vvb8u8rppbbk2')
      .then(function (response) {
        $scope.details = response.data;
        console.log($scope.details);
        console.log('We has datas', $scope.details)
      });
  }

  $scope.addToGarage = function(car) {

    var data ={
      make: $scope.search,
      model: car
    }

    $http({
      method: "POST",
      url: '/api/garage',
      data: JSON.stringify(data)
    }).then(function successCallback(response){
      console.log(response)
    }, function errorCallback(response){
      console.log(response);
    });
   
    // create AJax call to the databse to post car to the garage in the database
    // then do a fetch from the database to load the cars to the screen.
    var stringedCar = $scope.search + ' ' + car;
    $scope.garage.push(stringedCar);
  }

  $scope.getCarsFromGarage = function(){};
});
