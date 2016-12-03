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
      this.newMessage = {data: ''};
    });

    this.send = (message) => {
      Messages.send(message);
    };

  }

})();
