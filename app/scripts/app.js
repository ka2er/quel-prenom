'use strict';

angular
  .module('quelPrenomApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/choose/:parent/:sex', {
        templateUrl: 'views/choose.html',
        controller: 'ChooseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


    });
