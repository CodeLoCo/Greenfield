// module for signup page view
// var Firebase = require("firebase");
angular.module('bootCamp.signup', ['firebase'])

// if there are factory dependencies, add function it depends on as a function argument

.factory('Profile', ['$firebaseObject'], function($firebaseObject){
  return function(username){
    var ref = new Firebase("https://bondfire2.firebaseio.com");
    var profileRef = ref.child(username);
    return $firebaseObject(profileRef);
  }

})
.controller('SignupController', ['$scope', 'Profile', '$location',function($scope, Profile) {
  console.log("inside SignupController---------------");
    console.log(ref);

	// this function runs when user tries to log in
	// should authenticate then redirect to userHome page
  	$scope.signUserUp = function() {
  		$location.path('/userHome');
      //$scope.data = $firebaseObject(ref);
      $scope.profile = Profile("firstname")
      $scope.profile.$save().then(function(){
        alert('save this shit!!');

      }).catch(function(error){
        alert('Error!');
      });
      console.log($scope.data)

  	}
  }
]);