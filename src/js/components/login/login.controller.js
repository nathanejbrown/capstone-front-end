(function() {

  'use strict';

  angular
    .module('capstoneApp.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$http', '$rootScope'];

  function loginController($scope, $http, $rootScope) {
    /*jshint validthis: true */

    this.username = '';
    this.password = '';
    $rootScope.loggedin = false;
    this.errorMessage = '';

    this.login = function(username, password) {
      $http({
        url: 'http://localhost:3000/authenticate',
        method: 'POST',
        data: {username: username, password: password}
      })
      .then(response => {
        this.username = '';
        this.password = '';
        if (response.data === 'loggedin') {
          $rootScope.loggedin = true;
        }
        if ($rootScope.loggedin) {
          this.errorMessage = 'yayy';
        } else {
          this.errorMessage = 'Your username or password was incorrect';
        }
      });
    };

    this.signup = function(username, password) {
      $http({
        url: 'http://localhost:3000/signup',
        method: 'POST',
        data: {username: username, password: password}
      })
      .then(response => {
        this.login(this.username, this.password);
        this.username = '';
        this.password = '';
      });
    };

    this.loginLinkedin = function() {
      $http.get('http://localhost:3000/linkedin');
    };
  }

})();
