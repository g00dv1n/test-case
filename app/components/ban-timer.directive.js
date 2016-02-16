//ban-timer.directive.js

/*
  Вынес в эту директиву, таймер для обратного отсчета времени,
  когда пользователя забанили. 

  Тип дерективы элемент. И она принимает атрибут count.
  В котором должно содержаться время в секундах, на сколько забанен.
  В конце count установится в ноль. Что дает возможнсть, с его помощью
  блокировать/разблокировать кнопку для отправки данных (Login/Continue)
*/


(function(){
	'use strict';

	
	angular
		.module('app')
		.directive('banTimer',banTimer);


		function banTimer(){
			var directive = {
				 restrict: 'E',
				 scope: {
				 	_count : '=count'
				 },
				 controller: BanTimerController

			};
			
			BanTimerController.$inject = ['$scope', '$element', '$attrs', '$interval'];

			return directive;


			function BanTimerController($scope, $element, $attrs, $interval){

				$scope.$watch('_count', function(newValue, oldValue) {
					var BannedTime = newValue;
					//alert($scope._count);
					if(BannedTime){
						//alert(scope._count);
						$interval(counter,1000,BannedTime+1);

					}


					function counter(){
					  	if (BannedTime) {
					  		BannedTime--;
					  		var btn = $element;
		  					var min = Math.floor(BannedTime / 60);
		  					var sec = ('0'+ (BannedTime) % 60).slice(-2);
		  					$(btn).html(min + ':' + sec);


					  	}
					  	else{
					  		$scope._count = 0;
					  	}


					}
				});
			}


		}

})();