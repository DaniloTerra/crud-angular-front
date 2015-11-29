var SERVER_URL = "http://localhost:8000";

$app = angular.module('crud', ['ngRoute']);

$app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider

     .when('/',                       { templateUrl: 'view/main.html'         })
     .when('/cliente',                { templateUrl: 'view/cliente/list.html', controller: 'clienteListController' })
     .when('/cliente/incluir',        { templateUrl: 'view/cliente/form.html', controller: 'clienteFormController', action: 'incluir' })
     .when('/cliente/alterar/:id',    { templateUrl: 'view/cliente/form.html', controller: 'clienteFormController', action: 'alterar' })
     .when('/cliente/excluir/:id',    { templateUrl: 'view/cliente/view.html', controller: 'clienteViewController', action: 'excluir' })
     .when('/cliente/visualizar/:id', { templateUrl: 'view/cliente/view.html', controller: 'clienteViewController', action: 'visualizar' })

     .otherwise({ redirectTo: '/' });

  $httpProvider.interceptors.push(function($q, $rootScope) {
    return function(promise) {
      //$rootScope.hideLoader();

      return promise.then(function(response) {
        //Função executada em caso de sucesso
        return(response);
      }, function(response) {
        //Função executada em caso de erro
        $data = response.data;
        $error = $data.error;

        console.error($data);

        if ($error && $error.text) {
          alert("ERROR: " + $error.text);
        } else {
          if (response.status == 404) {
            alert('Erro ao acessar o servidor. Página não encontrada.')
          } else {
            alert('Erro desconhecido. Por favor, veja o log de erros');
          }
        }
        return $q.reject(response);
      })
    }
  });
}]);
