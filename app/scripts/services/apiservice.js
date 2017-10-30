/**
 * Created by Dukagjin on 2/8/2017.
 */
'use strict';
angular.module('locationAnalyticsApp')
  .service('ApiService', ['$http', '$q', '$rootScope',function ($http, $q, $rootScope) {
    return {
      getJsonFile: getJsonFile,
      getMovies: getMovies,
/*      getPlan: getPlan
*/    };


     function getJsonFile(formModel) {


        return $q(function (resolve,reject) {
        $http({
          method: "GET",
          url: "http://localhost:8080/de/geoservice/getgeocode",
          params: {street: formModel.street, house: formModel.house, city: formModel.city, postalcode: formModel.postalcode}

        }).then(function (response) {
          resolve(response.data)
        });
      })
    }

    function getMovies(latValue, longValue, distanceValue) {

        return $q(function (resolve,reject) {
        $http({
          method: "GET",
          url: "http://localhost:8080/de/movies/nearByMovies",
          params: {lat: latValue, lon: longValue, distance: distanceValue} 

        }).then(function (response) {
          resolve(response.data)
        });
      })
    }


/*function getPlan(latValue, longValue,MovieValue, FoodValue, MaxTravelTimeValue, MaxWalkTimeValue, DateValue, MovieDurationValue,PrefferedPriceValue) {

        return $q(function (resolve,reject) {
        $http({
          method: "GET",
          url: "  http://localhost:8080/de/plans/getplan",
          params: {lat: latValue, lon: longValue, Movie: MovieValue Food: FoodValue, MaxTravelTime: MaxTravelTimeValue, MaxWalk: MaxWalkTimeValue, Date: DateValue } 

        }).then(function (response) {
          resolve(response.data)
        });
      })
    }*/






  }]);
