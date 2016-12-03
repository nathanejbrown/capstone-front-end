(function() {

  'use strict';

  angular
    .module('capstoneApp.config', [])
    .constant('config', {
      pubnub: {
        'publish-key': 'pub-c-329628de-5303-4dfa-be2c-4b27556d6cf6',
        'subscribe-key': 'sub-c-5773fef8-b8ba-11e6-963b-0619f8945a4f'
      }
    })
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
    })
    .when('/chat', {
      templateUrl: './js/components/chat/chat.view.html',
      controller: 'chatController',
      controllerAs: 'chatCtrl',
      css: './css/chat.css'
    })
    .when('/nextsteps', {
      templateUrl: './js/components/nextSteps/nextsteps.view.html',
      css: './css/homepage.css'
    });
  }

})();
