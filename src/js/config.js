(function() {

  'use strict';

  angular
    .module('capstoneApp.config', [])
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
    })
    .when('/redirect', {
      /* I was gonna use this to take linkedin data and create a user account in my database. Haven't fully set it up yet. */
      controller: 'redirectController',
      controllerAs: 'redirectCtrl'
    })
    .when('/profile', {
      templateUrl: './src/js/components/profile/profile.view.html',
      controller: 'profileController',
      controllerAs: 'profileCtrl',
      css: './src/css/profile.css'
    })
    .when('/memberchat', {
      templateUrl: './src/js/components/member-chat/memberchat.view.html',
      controller: 'memberChatController',
      controllerAs: 'memberChatCtrl',
      css: './src/css/chat.css'
    });
  }

})();
