//app.module.js

//Главный модуль приложения, в нем задается зависимость ngRoute, для роутинга
//Так же нужно подключить angular-route.min.js
(function(){
	'use strict';

	
	angular
		.module('app', ['ngRoute']);

})();