(function() {

  'use strict';

  angular
    .module('capstoneApp', [
      'ngRoute',
      'capstoneApp.config',
      'capstoneApp.components.main',
      'capstoneApp.components.login',
      'angularCSS',
      'ui.materialize'
    ]);

})();
