/**  * Created by Dukagjin on 1/19/2017.  */ 
'use strict'; 
angular.module('locationAnalyticsApp') .controller('CinemaCtrl', function ($scope,$http,$mdDialog,$interval)
  {  


    // Simple GET request example:
    var req = {
      method: 'GET',
      //url: "http://localhost:9000/json/dummy.json",
      url: "http://localhost:9000/data/restaurant.json",
      headers: {
        //'Content-Type': undefined
      },
      data: {

      }
    }

    $http(req).then(function (response) {
      $scope.loadList = response.data;
    });

    // Simple GET request example:
    var req2 = {
      method: 'GET',
      //url: "http://localhost:9000/json/movie.json",
      url:"http://localhost:8080/de/movies/nearByMovies?lat=52.5201848&lon=13.4099753&distance=1",
      headers: {
        //'Content-Type': undefined
      },
      data: {

      }
    }

    $http(req2).then(function (response) {
      $scope.movieList = response.data;
    });

    $scope.theme = 'red';

    var isThemeRed = true;

    $interval(function () {
      $scope.theme = isThemeRed ? 'blue' : 'red';

      isThemeRed = !isThemeRed;
    }, 2000);

    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }


  }); 