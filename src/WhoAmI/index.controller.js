(function () {
  'use strict';

  angular
    .module('app')
    .controller('WhoAmI.IndexController', Controller);

  Controller.$inject = ['AuthenticationService'];

  function Controller(AuthenticationService) {
    var vm = this;

    vm.salutation = 'Hi';
    vm.user = AuthenticationService.User();
    vm.name = vm.user.name;
  }

})();