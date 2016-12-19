(function () {
  'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'templates/detailscomp.template.html',
    bindings: {
        category: '<'
    }
  });

})();
