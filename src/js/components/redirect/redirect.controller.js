(function() {

  'use strict';

  angular
    .module('capstoneApp.components.redirect', [])
    .controller('redirectController', redirectController);

  redirectController.$inject = ['$scope'];

  function redirectController($scope) {
    /*jshint validthis: true */

    angular.element(document).ready(function () {
      document.getElementById('msg').innerHTML = 'Hello';
    });

  }

})();
