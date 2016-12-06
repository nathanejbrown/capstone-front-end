(function() {

  'use strict';

  angular
    .module('capstoneApp.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$http', '$rootScope', '$window'];

  function loginController($scope, $http, $rootScope, $window) {
    /*jshint validthis: true */

    this.emailAddress = '';
    this.password = '';
    $rootScope.loggedin = false;
    this.errorMessage = '';

    this.login = function(emailAddress, password) {
      $http({
        url: 'http://nathandennis-capstone-backend.herokuapp.com/authenticate',
        method: 'POST',
        data: {emailAddress: emailAddress, password: password}
      })
      .then(response => {
        this.emailAddress = '';
        this.password = '';
        if (response.data === 'loggedin') {
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
        url: 'http://nathandennis-capstone-backend.herokuapp.com/signup',
        method: 'POST',
        data: {emailAddress: emailAddress, password: password}
      })
      .then(response => {
        this.login(this.emailAddress, this.password);
        this.emailAddress = '';
        this.password = '';
      });
    };

    this.loginLinkedin = function() {
      $http.get('http://nathandennis-capstone-backend.herokuapp.com/linkedin');
    };
  }

})();
