// module for landingPage view
angular.module('bootCamp.landingPage', [ 'firebase'
	// add any factory dependencies here

])

// if there are factory dependencies, add function it depends on as a function argument
.controller('LandingPageController', ['$scope', '$state', function($scope, $state) {
	console.log("inside LandingPageController---------------");

	// this chunk makes the nested map view automatically show when landing page loads
	$scope.$on('$stateChangeSuccess', function(event, toState) {
		var aac;
		if (aac = toState && toState.params && toState.params.autoActivateChild) {
			$state.go(aac);
		}
	})
}])