//auth-state.directive.js

/*
  Просто вынес блок состояний в отдельную директиву.
  Как бы, можно задавать сообщения состояния из котроллера (Login, Logged success).
  Но тут, думаю, это не имеет смысла, все равно повторного использования не будет, а
  блок и так не универсальный.
  Не уверен что это правильно, но так рекомендовали в 
  Shaping Up with Angular.js
*/


(function(){
	'use strict';

	
	angular
		.module('app')
		.directive('authStateInfo',authStateInfo);

		function authStateInfo(){
			var directive = {
				 restrict: 'E',
			     templateUrl: 'login/auth-state-info.directive.html'

			};
			
			return directive;

		}

})();