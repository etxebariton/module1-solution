(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController ($scope, $filter){
    $scope.menu = "";
    $scope.menuCounter = 0;
    $scope.message = "";
    $scope.checkMenu = function(){
      $scope.menuCounter = calculateMenuQuantity($scope.menu);
      $scope.message = getMenuMessage($scope.menuCounter);
    };
  }

  function calculateMenuQuantity(string) {
    var totalStrings = 0;

    if (string.length>0){
      //Removing spaces from a string
      var re = /\s*,\s*/;
      var arrayOfStrings = string.split(re);
      for (var i=0;i<arrayOfStrings.length;i++){
        var element = arrayOfStrings[i];
        if (element.length>0)totalStrings+=1;
      }
    }
    return totalStrings;
  }

  function getMenuMessage(int){
    var message="";

    if(int==0){
      message = "Please enter data first";
    }
    else if (int>0 && int<4){
      message = "Enjoy!";
    }
    else message = "Too much!";

    return message;
  }

})();
