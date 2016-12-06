(function() {

  'use strict';

  angular
    .module('capstoneApp.components.profile', [])
    .controller('profileController', profileController);

  profileController.$inject = ['$scope', '$http', '$window', '$rootScope'];

  function profileController($scope, $http, $window, $rootScope) {
    /*jshint validthis: true */

    this.error = '';

    this.memberChat = function () {
      if ($rootScope.loggedin) {
        $window.location.href = 'http://localhost:8888/#/chat';
      } else {
        this.error = 'You must be logged in for that.';
      }
    };
  }

})();
