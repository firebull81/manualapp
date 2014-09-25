app.factory('identity', function($window){
  return {
    currentUser: $window.foundationUserObject,
    isAuthenticated: function(){
      return !!this.currentUser;
    }
  }
});