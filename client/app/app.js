var app = angular.module('myGarageApp', []);

app.controller('carController', function($scope, $http) {

  $scope.garage = [];

  $scope.fetch = function() {
    $http.get('http://api.edmunds.com/api/vehicle/v2/' + $scope.search +'/models?fmt=json&api_key=w3qpygvj3j3vvb8u8rppbbk2')
      .then(function (response) {
        $scope.details = response.data;
        console.log('We has datas', $scope.details)
      });
  }

  $scope.addToGarage = function(car) {
    var stringedCar = $scope.search + ' ' + car;
    $scope.garage.push(stringedCar);
  }
});
