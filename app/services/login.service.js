//login.service.js

/*
   Фабрика для обертки сервиса $http, для повторного использования
   Задаются данные для отправки и обработчики
*/


(function(){
  'use strict';

  
  angular
    .module('app')
    .factory('LoginService',LoginService);

    LoginService.$inject = ['$http','appUrls'];

    function LoginService($http, appUrls){

      var service = {};

      service.Login = Login;

      return service;

      function Login(credits, success, error){
 
        var config = {
          method: 'POST',
          url: appUrls.APP_ENDPOINT,
          data: credits,
          contentType: 'application/json; charset=utf-8',
          cache: false


        };

        $http(config)
          .then(success,error);


      }


    }

})();