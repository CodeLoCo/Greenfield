// module for login page view
angular.module('bootCamp.login', [
	// add any factory dependencies here

])

// if there are factory dependencies, add function it depends on as a function argument
.controller('LoginController', function($scope, $location) {
	console.log("inside LoginController---------------");

	// this function runs when user tries to log in
	// should authenticate then redirect to userHome page
	$scope.logUserIn = function() {
		$location.path('/userHome');

	}

})