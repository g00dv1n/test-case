//state-check.service.js

/*
    Фабрика для создания методов проверки статусов,
    чтобы не мусорить в контроллере.
    Проверяем '===' строго.
    P.S это мне подсказала проверка jshitn'ом
*/


(function(){
  'use strict';

  
  angular
    .module('app')
    .factory('stateCheckService',stateCheckService);

    stateCheckService.$inject = ['respondStates'];

    function stateCheckService(respondStates){

      var service  = {};
      service.isLogged = islogged;
      service.isDenied = isdenied;
      service.isBanned = isbanned;
      service.isHotreq = ishotreq;
      service.isHotpWrong = ishotpwrong; 
      service.isNone = isnone;

      return service;
      

      function islogged(state){

        return (state === respondStates.LOGGED);

      }


      function isdenied(state){

        return (state === respondStates.DENIED);

      }

      function isbanned(state){

        return (state === respondStates.BANNED);

      }
      
      function ishotreq(state){

        return (state === respondStates.HOTP_REQUIRED);

      }

      function ishotpwrong(state){

        return (state === respondStates.HOTP_WRONG);

      }

      function isnone(state){

        return (state === respondStates.NONE);

      }

    }

})();