//code will need refactor in future - includes eval, with and nested for loops w no brackets


angular.module('bootCamp', [])

.controller('toyProblems', function($scope) {
  $scope.JSoutput = function(a) {
    var str = "[";
    if (typeof(a) == "object" && a.length) {
      for (var i = 0; i < a.length; i++)
        if (typeof(a[i]) == "object" && a[i].length) {
          str += (i == 0 ? "" : " ") + "["
          for (var j = 0; j < a[i].length; j++)
            str += a[i][j] + (j == a[i].length - 1 ?
              "]" + (i == a.length - 1 ? "]" : ",") + "\n" : ", ");
        } else str += a[i] + (i == a.length - 1 ? "]" : ", ");
    } else str = a;
    return str;
  }

  $scope.write = function(str) {
    var outnode = document.getElementById("JSoutput");
    outnode.value += JSoutput(str);
  }

  $scope.writeln = function(str) {
    if (!str) str = "";
    var outnode = document.getElementById("JSoutput");
    outnode.value += JSoutput(str) + "\n";
  }

  $scope.JSrun = function() {
    var str;
    var outnode = document.getElementById("JSoutput");
    outnode.value = "";
    d = new Date().getTime();
    try {
      with(Math) {
        str = JSoutput(eval(document.getElementById("JSprogram").value));
      }
    } catch (e) {
      str = e.name + " at line " + (e.lineNumber - 56) + ": " + e.message;
    }
    var tnode = document.getElementById("JStiming");
    tnode.innerHTML = "" + (new Date().getTime() - d) / 1000;
    if (str != undefined) {
      outnode.value += str;
    }
  }

  $scope.JSselect = function() {
    var id = document.getElementById("JSexamples").value;
    var str = document.getElementById(id).value;
    document.getElementById("JSprogram").value = str;
    JSrun();
  }

  $scope.keyUp = function(event) {
    if (event.which == 77 && event.ctrlKey) JSrun();
  }

  $scope.random_list = function(n, r, s) {
    var a = [];
    for (var i = 0; i < n; i++) {
      a[i] = Math.floor(Math.random() * (s - r + 1)) + r;
    }
    return a;
  }

  $scope.random_matrix = function(m, n, r, s) {
    var A = [];
    for (var i = 0; i < m; i++) {
      A[i] = [];
      for (var j = 0; j < n; j++)
        A[i][j] = Math.floor(Math.random() * (s - r + 1)) + r;
    }
    return A;
  }

  $scope.factorial = function(n) { // simple version
    if (n <= 0) return 1;
    else return n * factorial(n - 1);
  }

  $scope.fibonacci = function(n) {
    var a = 0;
    var b = 1;
    for (var i = 0; i < n; i++) {
      b = a + b;
      a = b - a;
    }
    return a;
  }
}) l
