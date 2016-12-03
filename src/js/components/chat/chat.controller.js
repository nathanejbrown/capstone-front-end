(function() {

  'use strict';

  angular
    .module('capstoneApp.components.chat', ['chat'])
    .controller('chatController', chatController);

  chatController.$inject = ['Messages'];

  function chatController(Messages) {
    /*jshint validthis: true */

    this.newMessage = {
      data: ''
    };

    this.messages = [];

    Messages.receive((message) => {
      this.messages.push(message.data);
    });

    this.send = (message) => {
      console.log('something');
      Messages.send(message);
    };

  }

})();
