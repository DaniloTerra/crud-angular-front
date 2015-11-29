$app.controller('clienteFormController',
['$scope', '$routeParams','$route', '$http',
function($scope, $routeParams, $route, $http) {
  $scope.isAlterando = $route.current.action == 'alterar';
  $scope.isIncluindo = $route.current.action == 'incluir';
  $scope.cliente     = null;
  $scope.acao        = "ação";

  $scope.loadCliente = function() {
    if ($routeParams.id != null) {
      $scope.get(SERVER_URL+'/cliente/'+$routeParams.id).success(function(data) {
        $scope.cliente = data;
      });
    } else {
      $scope.cliente = {};
    }
  };

  $scope.salvar = function() {
    if ($scope.isAlterando) {
      $http.put(SERVER_URL+'/cliente/'+$routeParams.id, $scope.cliente).success(function(data) {
        alert('Alterado com sucesso');
      });
    } else if ($scope.isIncluindo) {
      $http.post(SERVER_URL+'/cliente', $scope.cliente).success(function(data) {
        alert('Incluído com sucesso');
      });
    }
  }
}]);
