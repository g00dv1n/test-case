//app.constants.js

/*
    Констаты для приложения. Сюда я вынес строки статусов для удобства.
    Так же URL, для запроса к АПИшке приложения. 
    Если запускать на локальном(моём сервере), то следует поменять на
    APP_ENDPOINT: /login
*/


(function(){
	'use strict';

	
	angular
		.module('app')
		.constant('respondStates', {
			LOGGED: 'Logged',
			DENIED: 'Denied',
			BANNED: 'Banned',
			HOTP_REQUIRED: 'HOTP required', 
			HOTP_WRONG: 'HOTP wrong code',
			NONE: 'none'

		})
		.constant('appUrls', {
			//APP_ENDPOINT: '/login'
			APP_ENDPOINT: 'https://93.183.203.13:10443/login'
		});



})();