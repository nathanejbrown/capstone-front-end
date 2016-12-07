(function() {

  'use strict';

  angular
    .module('capstoneApp.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$http', '$rootScope', '$window', '$localStorage'];

  function loginController($scope, $http, $rootScope, $window, $localStorage) {
    /*jshint validthis: true */

    this.emailAddress = '';
    this.password = '';
    $rootScope.loggedin = false;
    this.errorMessage = '';

    this.login = function(emailAddress, password) {
      $http({
        url: 'https://nathandennis-capstone-backend.herokuapp.com/authenticate',
        method: 'POST',
        data: {emailAddress: emailAddress, password: password}
      })
      .then(response => {
        $localStorage.$default({
          description: response.data.description,
          profilePicture: response.data.profilePicture,
          firstName: response.data.firstName,
          lastName: response.data.lastName
        });
        this.emailAddress = '';
        this.password = '';
        if (response.data.loggedin) {
          $rootScope.loggedin = true;
        }
        if ($rootScope.loggedin) {
          $window.location.href = '#/profile';
        } else {
          this.errorMessage = 'Your email address or password was incorrect';
        }
      });
    };

    this.signup = function(emailAddress, password) {
      $http({
        url: 'https://nathandennis-capstone-backend.herokuapp.com/signup',
        method: 'POST',
        data: {emailAddress: emailAddress, password: password}
      })
      .then(response => {
        $window.location.href = '#/';
      });
    };

    this.loginLinkedin = function() {
      $http.get('https://nathandennis-capstone-backend.herokuapp.com/linkedin');
    };
  }

})();
