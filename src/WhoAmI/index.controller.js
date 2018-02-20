(function () {
  'use strict';

  angular
    .module('app')
    .controller('WhoAmI.IndexController', Controller);

  Controller.$inject = ['AuthenticationService'];

  function Controller(AuthenticationService) {
    var vm = this;

    var user = AuthenticationService.User();
    var claims = [];
    var claimKeys = Object.keys(user);
    for (var i = 0; i < claimKeys.length; i++) {
      claims.push({
        key: claimKeys[i],
        value: user[claimKeys[i]],
      });
    }

    vm.salutation = 'Hi';
    vm.user = user;
    vm.name = vm.user.name;
    vm.claims = claims;
  }

})();