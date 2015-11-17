// module for signup page view
// var Firebase = require("firebase");
angular.module('bootCamp.signup', ['firebase'])

// if there are factory dependencies, add function it depends on as a function argument
.controller('SignupController', function($scope, $location, $firebaseObject, $firebase) {
  console.log("inside SignupController---------------");

  // var ref = new Firebase("https://bondfire2.firebaseio.com");

  // this function runs when user tries to log in
  // should authenticate then redirect to userHome page
var ref = new Firebase("https://bondfire2.firebaseio.com");
// $scope.data = $firebaseObject(ref);

// The obj variable will appear to be empty here and won't contain any remote data,
// because the request to the server has not returned when we reach this line.
// console.log($scope.data);
  $scope.signUserUp = function() {
    $location.path('/userHome');
// console.log('this the name model', $scope.fname);
//$scope.firstname.$save();
var users = ref.child('users');
  users.push({
      fname: $scope.fname,
      school: $scope.school,
      github: $scope.github,
      email: $scope.email
  });
    // var save = Profile.set({ 
    //     firstname: $scope.firstname,
    //     lastname: $scope.lastname,
    //     password: $scope.password
    //   });
    $scope.fname = '';
    $scope.school = '';
    $github = '';
    $scope.email = '';

    // if(save){
    //   alert('saved successfully');
    // } else {
    //   alert('OOPS!')
    // }

    // $scope.data = $firebaseObject(ref);
    // console.log($scope.data)
  }
})
// .value('fbURL', 'https://bondfire2.firebaseio.com/')
// .factory('Profile', function(fbURL, $firebase) {
//   return $firebase(new Firebase(fbURL)).$firebaseArray();
// });




// .controller('SignupController', ['$scope', 'Profile', '$location',function($scope, Profile) {
//   console.log("inside SignupController---------------");
//     console.log(ref);

//   // this function runs when user tries to log in
//   // should authenticate then redirect to userHome page
//     $scope.signUserUp = function() {
//       $location.path('/userHome');
//       //$scope.data = $firebaseObject(ref);
//       $scope.profile = Profile()
//       $scope.profile.$save().then(function(){
//         alert('save this shit!!');

//       }).catch(function(error){
//         alert('Error!');
//       });
//       console.log($scope.data)

//     }
//   }
// ]);