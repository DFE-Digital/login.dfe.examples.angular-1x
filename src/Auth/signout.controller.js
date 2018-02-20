(function () {
  'use strict';

  angular
    .module('app')
    .controller('Auth.SignOutController', Controller);

  Controller.$inject = ['$window', '$sessionStorage'];

  function Controller($window, $sessionStorage) {
    var vm = this;

    var idToken = $sessionStorage.user.idToken;
    delete $sessionStorage.user;

    var signoutRedirectUri = $window.location.href.substr(0, $window.location.href.length - $window.location.hash.length - 1);
    $window.location.href = 'http://login-dfe-oidc.herokuapp.com/session/end?id_token_hint=' + idToken + '&post_logout_redirect_uri=' + signoutRedirectUri;
  }

})();