(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService','ApiPath'];
function MyinfoController(MenuService,ApiPath) {
  var myinfoCtrl = this;
  myinfoCtrl.basePath = ApiPath;
myinfoCtrl.user=MenuService.getUserInfo();
myinfoCtrl.signedUp = true;
myinfoCtrl.title=MenuService.title();
myinfoCtrl.desc=MenuService.desc();
//myinfo.signedUp=MenuService.check();


}

})();
