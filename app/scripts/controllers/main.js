'use strict';
/**
 * @ngdoc function
 * @name locationAnalyticsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the locationAnalyticsApp
 */
angular.module('locationAnalyticsApp')
  .controller('MainCtrl', function ($scope, $http, ApiService, $rootScope, $location) {


       /*function generateGetRequest(formModel) {

      var string = "";

      for (var item in formModel) {

        string = string + "&" + item + "=" + formModel[item];
      }
      return encodeURI(string);
    }*/

    $rootScope.formModel = [];
    $scope.onSubmit = function () {
      console.log("Hey i'm submitted!");
      console.log($scope.formModel);
/*      console.log(generateGetRequest($scope.formModel));
*/      //var request = 



      $scope.data = [];

      ApiService.getJsonFile($scope.formModel).then(function (data) {
        console.log(data);

        $location.path('movie').search(data);
        $scope.data = data;


      });

    };

    $scope.reset = function () {
      $scope.formModel = {};
    }
/*
 $scope.foods = ('American Food AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(food) {
        return {abbrev: foods};
      });*/



/*
 $scope.formModel.myDate = new Date();

      $scope.minDate = new Date(
        $scope.formModel.myDate.getFullYear(),
        $scope.formModel.myDate.getMonth() - 2,
        $scope.formModel.myDate.getDate());

      $scope.maxDate = new Date(
        $scope.formModel.myDate.getFullYear(),
        $scope.formModel.myDate.getMonth() + 2,
        $scope.formModel.myDate.getDate());  */




  });
/*angular.module('locationAnalyticsApp').config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('YYYY-MM-DD');
    };
})*/