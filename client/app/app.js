angular.module('myGarageApp', [])
  .controller('carController', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Volkswagen";

    function fetch() {
      $http.get('http://api.edmunds.com/api/vehicle/v2/' + $scope.search +'/models?fmt=json&api_key=w3qpygvj3j3vvb8u8rppbbk2')
        .then(function(response) {
          $scope.details = response.data;
          console.log($scope.details)
        });

      //render information to a view on the screen
    }


    // $scope.model = function(movie) {
    //   $scope.search = movie.Title;
    // };

    // $scope.select = function() {
    //   this.setSelectionRange(0, this.value.length);
    // }
  });