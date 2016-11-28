(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.lunchList = '';
    $scope.message = 'Check If Too Much';

    $scope.checkLunch = function () {
      var list = $scope.lunchList.split(',');
      if ($scope.lunchList === ""){
        $scope.message = "Please enter data first";
        return;
      }
      if (list.length<=3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
}
})();
