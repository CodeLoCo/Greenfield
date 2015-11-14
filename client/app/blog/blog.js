// module for blog view
angular.module('bootCamp.blog', [
	// add any factory dependencies here

])

// if there are factory dependencies, add function it depends on as a function argument
.controller('BlogController', function($scope, $http) {
  $scope.test = "Hey";
  $http.get('./data/postdata.json').success(function(data){
    $scope.posts = data;
  })


	console.log("inside BlogController---------------");
})