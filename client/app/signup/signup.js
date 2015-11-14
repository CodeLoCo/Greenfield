// module for signup page view
angular.module('bootCamp.signup', [
	// add any factory dependencies here

])

// if there are factory dependencies, add function it depends on as a function argument
.controller('SignupController', function($scope, $location) {
	console.log("inside SignupController---------------");

	// this function runs when user tries to log in
	// should authenticate then redirect to userHome page
	$scope.signUserUp = function() {
		$location.path('/userHome');

	}

})