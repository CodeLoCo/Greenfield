// module for blog view
// angular.module('bootCamp.blog', [
// 	// add any factory dependencies here

// ])

// // if there are factory dependencies, add function it depends on as a function argument
// .controller('BlogController', function($scope, $http) {
  
//   $http.get('./data/postdata.json').success(function(data){
//     $scope.posts = data;
//   })


// 	console.log("inside BlogController---------------");
// })




(function(){
  var app = angular.module('bootCamp.blog',[]);
  
  app.controller('BlogController', ['$http', function($http){
    
    var blog = this;
    blog.title = "CampFire Stories";
    
    blog.posts = {};
    $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
      blog.posts = data;
    });
    
    blog.tab = 'blog';
    
    blog.selectTab = function(setTab){
      blog.tab = setTab;
      console.log(blog.tab)
    };
    
    blog.isSelected = function(checkTab){
      return blog.tab === checkTab;
    };
    
    blog.post = {};
    blog.addPost = function(){
      blog.post.createdOn = Date.now();
      blog.post.comments = [];
      blog.post.likes = 0;
      blog.posts.unshift(this.post);
      blog.tab = 0;
      blog.post ={};
    };   
    
  }]);
  
  app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });
 
})();
 
