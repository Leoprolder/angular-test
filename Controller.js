angular.module('angular-test', []);
angular.module('angular-test').config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);

function Controller() {
	this.message = "Controller is working"
}

function ThisIsTester() {
	this.message = "Why does it work?"
}

function MessageScopeController($scope) {
	$scope.text = "pen";
	this.one = "pineapple";
}

function TriggerYellow($scope) {
	$scope.isYellow = true;
	$scope.triggerYellow = function() {
		$scope.isYellow = !$scope.isYellow;
	}
}