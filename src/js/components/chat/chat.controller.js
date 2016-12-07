(function() {

  'use strict';

  angular
    .module('capstoneApp.components.chat', ['pubnub.angular.service'])
    .controller('chatController', chatController);

  chatController.$inject = ['$scope', 'Pubnub'];

  function chatController($scope, Pubnub) {
    /*jshint validthis: true */

    this.channel = 'myChannel123';
    this.uuid = Math.floor(Math.random() * 100000).toString();
    Pubnub.init({
      publish_key: 'pub-c-329628de-5303-4dfa-be2c-4b27556d6cf6',
      subscribe_key: 'sub-c-5773fef8-b8ba-11e6-963b-0619f8945a4f',
      uuid: this.uuid,
      ssl: true
    });

    this.displayName = '';

    this.newMessage = {
      data: ''
    };

    this.messages = [];

    Pubnub.subscribe({
      channel: this.channel,
      triggerEvents: ['callback']
    });

    $scope.$on(Pubnub.getMessageEventNameFor(this.channel), (ngEvent, m) => {
      $scope.$apply(() => {
        this.messages.push(m);
      });
    });

    // A function to display a nice uniq robot avatar
    // this.avatarUrl = function(uuid) {
    //   return 'https://robohash.org/' + uuid + '?set=set2&bgset=bg2&size=70x70';
    // };

    this.sendMessage = () => {
      this.username = this.displayName || 'Anonymous';
      Pubnub.publish({
        channel: this.channel,
        message: {content: `${this.username}: ${this.newMessage.data}`, sender_uuid: this.uuid, date: new Date()},
        callback: function(m) {
          console.log(m);
        }
      });
      this.newMessage.data = '';
    };

  }

})();
