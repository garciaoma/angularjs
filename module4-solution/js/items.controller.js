(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemscontroller = this;

  itemscontroller.items = items;
}

})();
