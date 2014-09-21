var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/partials/home',
            controller: 'MainController'
        })
});

app.controller('MainController', function($scope){
    $scope.hello = 'Hi From Angular';
});