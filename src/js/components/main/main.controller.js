(function() {

  'use strict';

  angular
    .module('capstoneApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Mark Sucks!';
  }

})();
