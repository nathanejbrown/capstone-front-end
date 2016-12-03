(function() {

  'use strict';

  angular
    .module('capstoneApp', [
      'ngRoute',
      'capstoneApp.config',
      'capstoneApp.components.main',
      'capstoneApp.components.login',
      'capstoneApp.components.chat',
      'angularCSS',
      'ui.materialize',
      'chat'
    ]);

})();
