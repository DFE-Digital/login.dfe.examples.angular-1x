(function () {
  angular.module('app', ['ui.router', 'ngStorage'])
    .config(configure)
    .run(run);


  function configure($stateProvider, $urlRouterProvider) {
    // default route
    $urlRouterProvider.otherwise("/");

    // app routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.view.html',
        controller: 'Home.IndexController',
        controllerAs: 'vm'
      })
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
      })
      .state('signOut', {
        url: '/signout',
        controller: 'Auth.SignOutController',
        controllerAs: 'vm'
      });
  }

  function run($rootScope, $location, AuthenticationService) {
    AuthenticationService.ProcessAuthCallback();

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      console.log('path = ' + $location.path());
      var publicPages = ['', '/', '/auth'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !AuthenticationService.User()) {
        $location.path('/auth');
      }
    });
  }
})();