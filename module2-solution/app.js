(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.itemsToBuy = ShoppingListCheckOffService.getToBuyList();

  toBuy.buy = function (index) {
    ShoppingListCheckOffService.buy(index);
  }
};
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

  alreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.getAlreadyBoughtList();
};

function ShoppingListCheckOffService() {
  var service = this;
  var toBuy = [{quantity: 3,name: "Cookies"},
  {quantity: 5, name: "Chips"},
  {quantity: 5, name: "Pepto bismol"},
  {quantity: 5, name: "Pepto bismol (apple)"},
  {quantity: 5, name: "Pepto bismol (pinapple)"}];
  var bought =[];

  service.getToBuyList = function () {
    return toBuy;
  };

  service.getAlreadyBoughtList = function () {
    return bought;
  };

  service.buy = function (index){
    var item = toBuy[index];

    bought.push(item);
    toBuy.splice(index,1);
  };
}
})();
