/**
 * Created by Dukagjin on 1/19/2017.
 */

angular.module('locationAnalyticsApp')
  .controller('FoodCtrl', function ($scope, $http) {



  var req = {
    method: 'GET',
    url: "http://localhost:8080/de/movies/nearByMovies?lat=52.5201848&lon=13.4099753&distance=1",
    headers: {
      //'Content-Type': undefined
    },
    data: {
    }
  }

  $http(req).then(function (response) {
    $scope.loadList = response.data;
  });



});