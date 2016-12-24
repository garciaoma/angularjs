(function () {
"use strict";

angular.module('admin')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'useravailable', 'ApiPath'];
function MyInfoController(user, useravailable, ApiPath) {
  var controller = this;
  controller.user = user;
  controller.useravailable = useravailable;
}

})();
