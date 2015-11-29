$app.controller('clienteFormController', ['$scope', '$routeParams','$route', function($scope, $routeParams, $route) {
  $scope.titulo = 'Form';
  $scope.action = $route.current.action;
}]);
