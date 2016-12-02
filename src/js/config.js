(function() {

  'use strict';

  angular
    .module('capstoneApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: './js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      css: './css/homepage.css'
    })
    .when('/login', {
      templateUrl: './js/components/login/login.view.html',
      controller: 'loginController',
      controllerAs: 'loginCtrl',
      css: './css/homepage.css'
    })
    .when('/resources', {
      templateUrl: './js/components/resources/resources.view.html',
      css: './css/resources.css'
    });
  }

})();
