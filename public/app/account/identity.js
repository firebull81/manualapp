app.factory('identity', function($window, UsersResource){
  var user;
  if($window.foundationUserObject){
    user = UsersResource;
    angular.extend(user, $window.foundationUserObject);
  }
  return {
    currentUser: user,
    isAuthenticated: function(){
      return !!this.currentUser;
    },
    isAuthorizedForRole: function (role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  }
});