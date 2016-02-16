//login.controller.js


/*
    Главный контроллер приложения. 
    В приложении имеются различные 'статусы'.
    Основные:
        isLogged 
        isDenied 
        isBanned 
        isHotreq
        isHotpWrong 
        isNone   (этот статус когда только запусается приложения и не сделано еще запросов)
    И вспомогательные:
        isLoginForm
        isHotpForm

    Вспомогательные для показа/скрытия форм, а основные для регуляции ввода данных,
    статуса и тд.

    Основная обработка идет в функциях allOk - это callback для $http
    (В этой функции устанавилваются все статусы исходя из текущего тела ответа и
    очищаются поля ввода при неудаче.)

    updateState - тут обновляются все состояния + задается время бана.


*/




(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope' ,'LoginService','respondStates','stateCheckService'];

    function LoginController($scope,LoginService,respondStates,stateCheckService) {
        var vm = this;

        vm.SingIn = singin;
        vm.EnterCode = entercode;

        vm.isLoginForm = true;
        vm.isHotpForm = false;
        vm.login = '';
        vm.pass =  '';
        vm.hotp = '';

        vm.currentState = 'none';

        vm.isLogged = false;
        vm.isDenied = false;
        vm.isBanned = false;
        vm.isHotreq = false;
        vm.isHotpWrong = false;
        vm.isNone   =  true;

        var currentRespondBody;



        function singin(){

            vm.dataLoad = true;
            var data = {
                 Login: vm.login,
                 Password: vm.pass

            };


            LoginService.Login(data,allOk, err);



        }

        function entercode(){
            vm.dataLoad = true;
            var data = {
                 Login: vm.login,
                 Password: vm.pass,
                 Hotp: vm.hotp

            };


            LoginService.Login(data,allOk, err);

        }


        function cleanLoginForm(){
            vm.login = '';
            vm.pass =  '';
        }

        function cleanHotpForm(){
            vm.hotp = '';
        }

        function updateState(){
            vm.isLogged = stateCheckService.isLogged(vm.currentState);
            vm.isDenied = stateCheckService.isDenied(vm.currentState);
            vm.isBanned = stateCheckService.isBanned(vm.currentState);
            vm.isHotreq = stateCheckService.isHotreq(vm.currentState);
            vm.isHotpWrong = stateCheckService.isHotpWrong(vm.currentState);
            vm.isNone   = stateCheckService.isNone(vm.currentState);

            if(vm.isHotreq){
                vm.isLoginForm = false;
                vm.isHotpForm = true;

            }
            if(vm.isLogged){
                vm.isLoginForm = false;
                vm.isHotpForm = false;
            }

            if(vm.isBanned){
                $scope.BannedTime=parseInt(currentRespondBody.Time) || 300;
            }


        }


        function allOk(respond){

            vm.dataLoad = false;
            vm.currentState = respond.data.Auth || 'none';
            updateState();

            if(vm.isDenied){
              cleanLoginForm();
            }
            if(vm.isLoginForm && vm.isBanned){
                cleanLoginForm();
            }  
            if(vm.isHotpForm && vm.isBanned){
                cleanHotpForm();
            }   

            currentRespondBody = respond.data;


        }

        function err(respond){
            console.log('ERROR: No Access-Control-Allow-Origin header is present on the requested resource.');

            //alert("ERROR: No 'Access-Control-Allow-Origin' header is present on the requested resource.");
            vm.dataLoad = false;
            
        }


    }

})();