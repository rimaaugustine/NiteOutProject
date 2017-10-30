'use strict';
/**
 * @ngdoc overview
 * @name locationAnalyticsApp
 * @description
 * # locationAnalyticsApp
 *
 * Main module of the application.
 */
angular.module('locationAnalyticsApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngMaterial'
])
  .config(function ($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movie', {
        templateUrl: 'views/movie_list.html',
        controller: 'MovieCtrl',
        controllerAs: 'main'
      })
      .when('/food', {
        templateUrl: 'views/food.html',
        controller: 'FoodCtrl',
        controllerAs: 'main'
      })
      .when('/transport', {
        templateUrl: 'views/transport.html',
        controller: 'TransportCtrl',
        controllerAs: 'main'
      })
      .when('/moviedetails', {
        templateUrl: 'views/movie_list_details.html',
        controller: 'CinemaCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
