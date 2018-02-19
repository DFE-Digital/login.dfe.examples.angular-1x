(function () {
  'use strict';

  angular
    .module('app')
    .controller('Auth.AuthRequiredController', Controller);

  Controller.$inject = ['$window'];

  function Controller($window) {
    var vm = this;

    $window.location.href = 'https://login-dfe-oidc.herokuapp.com/auth?client_id=exampleng&response_type=id_token&scope=openid+profile&nonce=todo';
  }

})();