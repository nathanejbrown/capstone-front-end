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
    });
  }

})();
