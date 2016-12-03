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
      templateUrl: './src/js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      css: './src/css/homepage.css'
    })
    .when('/login', {
      templateUrl: './src/js/components/login/login.view.html',
      controller: 'loginController',
      controllerAs: 'loginCtrl',
      css: './src/css/homepage.css'
    })
    .when('/resources', {
      templateUrl: './src/js/components/resources/resources.view.html',
      css: './src/css/resources.css'
    })
    .when('/chat', {
      templateUrl: './src/js/components/chat/chat.view.html',
      controller: 'chatController',
      controllerAs: 'chatCtrl',
      css: './src/css/chat.css'
    })
    .when('/nextsteps', {
      templateUrl: './src/js/components/nextSteps/nextsteps.view.html',
      css: './src/css/homepage.css'
    });
  }

})();
