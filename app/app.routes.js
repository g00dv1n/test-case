//app.routes.js

//  Тут задаются пути для маршурутизации

/*
    По-хорошему, когда пользователь успешно залогинился его надо редирект
    на другую вьюшку. Но в данном тестовом приложении это не имеет смысла.
*/

(function(){

	angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider

            .when('/login', {
                controller: 'LoginController',
                controllerAs: 'vm',
                templateUrl: 'login/login.view.html'

            })

            .otherwise({ redirectTo: '/login' });
     }

})();