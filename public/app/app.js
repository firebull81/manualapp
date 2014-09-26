var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  var routeRoleChecks = {
    admin: {
      auth: function(auth) {
        return auth.isAuthorizedForRole('admin');
      }
    }
  }

  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/home',
      controller: 'mainCtrl'
    })
    .when('/admin/users',{
      templateUrl: '/partials/admin/users-list',
      controller: 'userListCtrl',
      resolve: routeRoleChecks.admin
    })
});

app.run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection){
    if(rejection === 'not authorized'){
      $location.path('/');
    }
  })
});