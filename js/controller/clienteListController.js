$app.controller('clienteListController',
['$scope', '$routeParams', '$route', '$http', function($scope, $routeParams, $route, $http) {
  $scope.titulo = 'Listagem de todos os cliente';
  $scope.action = $route.current.action;

  $scope.loadAll = function() {
    $http.get(SERVER_URL+'/cliente').success(function(data) {
      $scope.clientes = data;
    }).error(function(data) {
      console.error(data);
    });
  };
}]);
