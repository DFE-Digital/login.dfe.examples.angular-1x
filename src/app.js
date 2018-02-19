(function () {
  angular.module('app', ['ui.router', 'ngStorage'])
    .config(configure)
    .run(run);


  function configure($stateProvider, $urlRouterProvider) {
    // default route
    $urlRouterProvider.otherwise("/whoami");

    // app routes
    $stateProvider
      .state('whoami', {
        url: '/whoami',
        templateUrl: 'whoami/index.view.html',
        controller: 'WhoAmI.IndexController',
        controllerAs: 'vm'
      })
      .state('authRequired', {
        url: '/auth',
        controller: 'Auth.AuthRequiredController',
        controllerAs: 'vm'
      });
  }

  function run($rootScope, $location, AuthenticationService) {
    AuthenticationService.ProcessAuthCallback();

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/auth'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !AuthenticationService.User()) {
        $location.path('/auth');
      }
    });
  }
})();