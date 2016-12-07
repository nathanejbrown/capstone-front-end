(function() {

  'use strict';

  angular
    .module('capstoneApp.components.profile', [])
    .controller('profileController', profileController);

  profileController.$inject = ['$scope', '$http', '$window', '$rootScope', '$localStorage'];

  function profileController($scope, $http, $window, $rootScope, $localStorage) {
    /*jshint validthis: true */

    this.error = '';
    this.firstName = $localStorage.firstName;
    this.lastName = $localStorage.lastName;
    this.profilePicture = $localStorage.profilePicture;
    this.description = $localStorage.description;

    this.memberChat = function () {
      if ($rootScope.loggedin) {
        $window.location.href = 'https://nathanejbrown.github.io/capstone-front-end/#/memberchat';
      } else {
        this.error = 'You must be logged in for that.';
      }
    };
  }

})();
