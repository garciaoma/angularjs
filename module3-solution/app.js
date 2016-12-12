(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.constant('URL', 'https://davids-restaurant.herokuapp.com/menu_items.json')
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var narrowItDown = this;
  narrowItDown.errorMessage = "Nothing found";

  narrowItDown.search = function () {
    if (narrowItDown.searchTerm === undefined || !narrowItDown.searchTerm){
      narrowItDown.errorMessage = "Nothing found";
      narrowItDown.showError = true;
      narrowItDown.found = [];
      return;
    }
    var premise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);

    premise.then(function (response) {
      narrowItDown.found = response;
      if (narrowItDown.found.length>0){
        narrowItDown.showError = false;
      } else {
        narrowItDown.showError = true;
      }
    }).catch(function (response) {
      narrowItDown.showError = true;
    });
  }

  narrowItDown.remove = function (index) {
    narrowItDown.found.splice(index,1);
  }
};

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'narrowItDown',
    bindToController: true
  }
  return ddo;
};

function NarrowItDownDirectiveController() {
  var narrowItDown = this;
}

MenuSearchService.$inject = ['$http', 'URL', '$q'];
function MenuSearchService($http, URL, $q) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      url: URL
    }).then(function (response) {
      var fullList = response.data.menu_items;
      var resultList = [];
      var deferred = $q.defer();

      for (var i = 0; i < fullList.length; i++) {
        if (fullList[i].description.length !== 0 && fullList[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
          resultList.push(fullList[i]);
        }
      };
      deferred.resolve(resultList);
      return deferred.promise;
    });
  };
}
})();
