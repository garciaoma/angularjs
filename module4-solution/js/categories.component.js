(function () {
  'use strict';

  angular.module('data')
  .component('categories', {
    templateUrl: 'templates/categoriescomp.template.html',
    bindings: {
      items: '<'
    }
  });

})();
