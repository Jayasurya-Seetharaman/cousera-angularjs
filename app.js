(function () {
'use strict';

// angular.module('myFirstApp', [])
//
// .controller('MyFirstController', function ($scope) {
//   $scope.name="Jayasurya";
//   $scope.hello= function () {
//     return "Hello ! Welcome to Angular Js";
//   };

angular.module('NameCaluclator', [])

.controller('NameCaluclatorController', function($scope) {
  $scope.name="";
  $scope.totalvalue=0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalvalue = totalNameValue;
  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for(var i=0; i< string.length;i++){
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }

});



})();
