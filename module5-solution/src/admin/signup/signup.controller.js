(function () {
"use strict";

angular.module('admin')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'ApiPath', 'SignUpService']
function SignUpController($http, ApiPath, SignUpService) {
  var controller = this;
  controller.showform = true;

  controller.submit = function () {
    return $http.get(ApiPath + 'menu_items/'+ controller.user.favoritedish + '.json').then(function (response) {
      controller.showform = false;
      controller.showsuccess = true;
      SignUpService.save(controller.user);
      return response.data;
    }).catch(function () {
      controller.message = true;
    });
  }
}


})();
