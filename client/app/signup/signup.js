
angular.module('bootCamp.signup', ['firebase'])

// if there are factory dependencies, add function it depends on as a function argument
.controller('SignupController', function($scope, $location, $firebaseObject, $firebase) {
  console.log("inside SignupController---------------");

var previewFile = function() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    var inHere = reader.readAsDataURL(file);
    console.log(inHere)
  } else {
    preview.src = "";
  }
}

var ref = new Firebase("https://bondfire2.firebaseio.com");


$scope.getData = function() {
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  })
}

$scope.signUserUp = function() {

$location.path('/userHome');

var users = ref.child('users');
users.push({
  fname: $scope.fname,
  school: $scope.school,
  github: $scope.github,
  email: $scope.email,
  location: $scope.locale,
  summary: $scope.summary
});

  $scope.fname = '';
  $scope.school = '';
  $scope.github = '';
  $scope.email = '';
  $scope.locale = '';
  $scope.summary = '';
  }
})