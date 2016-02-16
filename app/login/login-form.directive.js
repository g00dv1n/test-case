//login-form.directive.js

/*
  Просто вынес формы в отельную директиву.
  Не уверен что это правильно, но так рекомендовали в 
  Shaping Up with Angular.js
*/


(function(){
  'use strict';

  
  angular
    .module('app')
    .directive('loginForm',loginForm);

    function loginForm(){
      var directive = {
         restrict: 'E',
           templateUrl: 'login/login-form.directive.html'

      };
      
      return directive;

    }

})();