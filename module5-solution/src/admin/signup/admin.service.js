(function () {
'use strict';

angular.module('admin')
.service('SignUpService', SignUpService);

function SignUpService () {
    var service = this;
    service.useravailable = false;

    service.save = function (currentuser) {
      service.user = currentuser;
      service.useravailable = true;
    }
}
})();
