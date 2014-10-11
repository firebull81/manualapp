'use strict'

app.controller('userListCtrl', function($scope, UsersResource){
  $scope.users = UsersResource.query();
});