(function () {
  'use strict';

  angular
    .module('app')
    .controller('Home.IndexController', Controller);

  Controller.$inject = ['$location', 'AuthenticationService'];

  function Controller($location, AuthenticationService) {
    var vm = this;

    vm.isLoggedIn = AuthenticationService.IsLoggedIn();
    vm.user = AuthenticationService.User();
  }

})();