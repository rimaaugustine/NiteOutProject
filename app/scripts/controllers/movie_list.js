/**
 * Created by Dukagjin on 1/19/2017.
 */
angular.module('locationAnalyticsApp')
  .controller('MovieCtrl', function ($scope, $location, ApiService, $rootScope) {


  	$scope.movieData = [];

  	$scope.data = $location.search();
  	console.log($scope.data); //lat long stored

  	ApiService.getMovies($scope.data.latitude, $scope.data.longitude, "1").then(function(movieData){
  		console.log(movieData); //movie data from the call stored

        $scope.loadList = movieData;


  	})



 $scope.onSubmit = function (movieData) {


      $scope.data = [];

      ApiService.getMovies(movieData).then(function (data) {
        console.log(data);

        $location.path('moviedetails').search(data);
        $scope.data = data;


      });
   $scope.filter1 = function(movieData){
     if (MovieData.title !== null){
       return MovieData.title;
     } else{
       return;
     }
   };

};











/*
  $scope.imagePath = 'images/lalaland.jpeg';
    $scope.imagePath2 = 'images/hiddenfigures.jpg';
    $scope.imagePath3 = 'images/avatar.jpg';
    $scope.imagePath4 = 'images/submarine.jpg';
    $scope.loadList = null;
*/
/* $scope.imagePath = 'img/washedout.png';*/













  });



