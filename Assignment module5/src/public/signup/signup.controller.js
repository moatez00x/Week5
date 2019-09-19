(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signupCtrl = this;
  signupCtrl.user={firstName:"",lastName:"",emailAdress:"",phoneNumber:"",shortName:""};

  signupCtrl.registred=false;
  signupCtrl.error =false;
  signupCtrl.submit=function () {


    var promise = MenuService.getItem(signupCtrl.user.shortName);
    promise.then(function(result){
      signupCtrl.registred =true;

      MenuService.user= signupCtrl.user;
    }).
    catch(function (error) {
      signupCtrl.error =true;

    });

    }
}

})();
