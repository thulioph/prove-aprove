var app = angular.module('proveAprove', ['ngRoute']).config(function($routeProvider) {
  // Definição das condições para rotas
  $routeProvider
  .when('/signin/', {
    templateUrl: 'templates/signin.html',
    controller: 'signin'
  })
  .when('/signup/', {
    templateUrl: 'templates/signup.html',
    controller: 'signup'
  })
  .when('/forgot-pass/', {
    templateUrl: 'templates/forgot-pass.html',
    controller: 'forgotPass'
  })
  .when('/receitas/', {
    templateUrl: 'templates/receitas.html',
    controller: 'receitas'
  })
  .when('/receita/:id', {
    templateUrl: 'templates/receita.html',
    controller: 'receita'
  })
  .when('/user/', {
    templateUrl: 'templates/user.html',
    controller: 'user'
  })
  .otherwise({
    redirectTo: '/'
  });
});

// Definição dos controllers
app.controller('signin', function($scope) {
  $scope.title = 'Signin';
});

app.controller('signup', function($scope) {
  $scope.title = 'Signup';
});

app.controller('forgotPass', function($scope) {
  $scope.title = 'Esqueceu a senha';
});

// abaixo eu injeto o factory ListReceitas no meu controller
app.controller('receitas', function($scope, ListReceitas) {
  $scope.title = 'Receitas';
  $scope.receitas = {};

  // chamando o método ListReceitas
  ListReceitas.getReceitas(function(data) {
    $scope.receitas = data;
  });
});

app.controller('receita', function($scope) {
  $scope.title = 'Receita Interna';
});

app.controller('user', function($scope) {
  $scope.title = 'Usuário';
});

// Definição dos services
app.factory('ListReceitas', [function () {

  var listaDeReceitas;

  var obj = {};

  obj = {
    getReceitas: function(callback){
      if(listaDeReceitas) {
        callback(listaDeReceitas);
        return false;
      } else {
          $http({
            method: 'GET',
            url: 'data/receitas.json'
          }).success(function(data) {
            obj.saveReceitas(data);
            callback(data);
          });
      }
    },
    saveReceitas: function(data){
      listaDeReceitas = data;
    }
  }

  return {

  };
}])


// O factory `listReceitas` verifica se as receitas existem, se não existir ele faz uma requisição para a url informada e guarda os dados com o `saveReceitas` para evitar fazer mais requisições.

