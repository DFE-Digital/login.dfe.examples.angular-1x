(function () {
  'use strict';

  angular
    .module('app')
    .controller('Auth.AuthRequiredController', Controller);

  Controller.$inject = ['$window', '$sessionStorage'];

  function Controller($window, $sessionStorage) {
    var vm = this;

    $sessionStorage.nonce = makeNonce();

    $window.location.href = 'https://signin-dev-oidc-as.azurewebsites.net/auth?client_id=exampleng&response_type=id_token&scope=openid+profile&nonce=' + $sessionStorage.nonce;
  }

  function makeNonce() {
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var nonce = '';
    for (var i = 0; i < 20; i++) {
      var index = Math.floor(Math.random() * Math.floor(charset.length - 1));
      nonce += charset[index];
    }
    return nonce;
  }

})();