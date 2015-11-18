
angular.module('bootCamp.signup', ['firebase'])

// if there are factory dependencies, add function it depends on as a function argument
.controller('SignupController', function($scope, $location, $firebaseObject, $firebase, $http) {
  console.log("inside SignupController---------------");


var ref = new Firebase("https://bondfire2.firebaseio.com");



$scope.getData = function() {
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  });
};

$scope.signUserUp = function() {
  var data;
  $http({
    method:'GET',
    url: 'https://api.github.com/users/' + $scope.github
  }).then(function(response){
    $scope.userImgUrl = response.data.avatar_url;
    console.log(response);
  });
  setTimeout(function(){


  console.log('this is the pic url----',$scope.userImgUrl )

$location.path('/landingPage');


$location.path('/userHome');
var users = ref.child('users');
users.push({
  fname: $scope.fname,
  school: $scope.school,
  github: $scope.github,
  email: $scope.email,
  location: $scope.locale,
  summary: $scope.summary,
  img: $scope.userImgUrl
});

  $scope.fname = '';
  $scope.school = '';
  $scope.github = '';
  $scope.email = '';
  $scope.locale = '';
  $scope.summary = '';
  // $scope.userImgUrl = '';
  },200);
  };
});
