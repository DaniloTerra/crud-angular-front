$app.controller('clienteViewController', ['$scope', '$routeParams', '$route',function($scope, $routeParams, $route) {
  $scope.action = $route.current.action;
  $scope.id = $routeParams.id;
  $scope.titulo = 'Visualização do cliente ' + $scope.id;
}]);
