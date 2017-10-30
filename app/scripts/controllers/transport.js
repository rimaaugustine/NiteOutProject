'use strict';

/**
 * @ngdoc function
 * @name locationAnalyticsApp.controller: TransportCtrl
 * @description
 * # TransportCtrl
 * Controller of the locationAnalyticsApp
 */
angular.module('locationAnalyticsApp')
        .controller('TransportCtrl', function ($scope, $http) {

 
            $scope.loadList01 = null;
            $scope.loadList02 = null;


            function loadTable01() {
                var req = {
                    method: 'GET',
                    url: "http://localhost:9000/data/route01.json",
                    headers: {
                        //'Content-Type': undefined
                    },
                    data: {
                    }
                }

                $http(req).then(function (response) {
                    $scope.loadList01 = response.data;
                });
            }

            function loadTable02() {
                var req = {
                    method: 'GET',
                    url: "http://localhost:9000/data/route01.json",
                    headers: {
                        //'Content-Type': undefined
                    },
                    data: {
                    }
                }

                $http(req).then(function (response) {
                    $scope.loadList02 = response.data;
                });
            }

            function loadTableNotWorking() {
//                var req = {
//                    method: 'GET',
//                    url: "https://maps.googleapis.com/maps/api/directions/json?origin=Chicago,IL&destination=Los+Angeles,CA&waypoints=Joplin,MO|Oklahoma+City,OK&key=AIzaSyDeMUax-IkQasbnYWZOI0tjEzu5BS-e53U",
//                    headers: {
//                        //'Content-Type': undefined
//                    },
//                    data: {
//                    }
//                }
//
//                $http(req).then(function (response) {
//                    alert(response);
//                    $scope.loadList01 = response.data;
//                });

//                jQuery.ajax({
//                    async: true,
//                    url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Chicago,IL&destination=Los+Angeles,CA&waypoints=Joplin,MO|Oklahoma+City,OK&key=AIzaSyDeMUax-IkQasbnYWZOI0tjEzu5BS-e53U&callback=?',
//                    dataType: 'jsonp',
//                    method: "GET",
//                    error: function (jqXHR, textStatus, errorThrown) {
//                        console.log(textStatus + ': ' + errorThrown);
//                    },
//                    success: function (data, textStatus, jqXHR) {
//                        if (data.Error || data.Response) {
//                            exists = 0;
//                        }
//                    }
//                });



//                $.getJSON("https://maps.googleapis.com/maps/api/directions/json?origin=Chicago,IL&destination=Los+Angeles,CA&waypoints=Joplin,MO|Oklahoma+City,OK&key=AIzaSyDeMUax-IkQasbnYWZOI0tjEzu5BS-e53U&callback=?",
//                        function(json) {
//                             console.log(json);
//                        }
//                );

//var geocoder = new google.maps.Geocoder();
//geocoder.geocode({ <put options here>}, callback);

            }
 
            loadTable01();
            loadTable02();


        });