(function () {
  'use strict';

  angular
    .module('app')
    .factory('AuthenticationService', Service);

  Service.$inject = ['$location', '$sessionStorage'];

  function Service($location, $sessionStorage) {
    var service = {};

    service.ProcessAuthCallback = ProcessAuthCallback;
    service.User = User;

    return service;

    function ProcessAuthCallback() {
      var data = $location.url();
      if (!data.startsWith('#')) {
        return;
      }

      var params = parseUrlData(data);
      var idToken = extractIdToken(params);
      if (!idToken) {
        return;
      }

      var user = JSON.parse(idToken.payload);
      if ($sessionStorage.nonce === user.nonce) {
        user.name = user.given_name + ' ' + user.family_name;
        $sessionStorage.user = user;
      }
    }

    function User() {
      return $sessionStorage.user;
    }

    function parseUrlData(data) {
      var params = [];

      var temp = data.substr(1).split('&');
      for (var i = 0; i < temp.length; i++) {
        params.push(temp[i].split('='));
      }

      return params;
    }

    function extractIdToken(params) {
      for (var i = 0; i < params.length; i++) {
        if (params[i][0] === 'id_token') {
          var segments = params[i][1].split('.');
          return {
            header: atob(segments[0]),
            payload: atob(segments[1]),
          }
        }
      }
      return null;
    }
  }
})();