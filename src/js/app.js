(function() {

  'use strict';

  angular
    .module('capstoneApp', [
      'ngRoute',
      'capstoneApp.config',
      'capstoneApp.components.main',
      'capstoneApp.components.login',
      'capstoneApp.components.chat',
      'capstoneApp.components.redirect',
      'capstoneApp.components.profile',
      'capstoneApp.components.memberchat',
      'angularCSS',
      'ui.materialize',
      'pubnub.angular.service'
    ]);

})();
