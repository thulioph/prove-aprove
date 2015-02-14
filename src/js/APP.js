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

// adiciono uns parâmetros de rota através do $routeParams
// adiciono um filtro.
app.controller('receita', function($scope, $filter, $routeParams, ListReceitas) {
  $scope.title = 'Receita Interna';

  var meuFiltro = $filter;

  // chamando o método ListReceitas
  ListReceitas.getReceitas(function(data) {
    $scope.receita = meuFiltro('filter')(data, {
      id: $routeParams.id
    })[0];
    debugger;
  });

});

app.controller('user', function($scope) {
  $scope.title = 'Usuário';
});

// abaixo eu injeto o factory ListReceitas no meu controller
app.controller('receitas', function($scope, ListReceitas) {
  $scope.title = 'Receitas';
  $scope.saudacao = 'Qual receita você deseja fazer?';

  $scope.receitas = {};

  // chamando o método ListReceitas
  ListReceitas.getReceitas(function(data) {
    $scope.receitas = data;
  });
});


// Definição dos services
app.factory('ListReceitas', function ($http) {

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

  return obj;
});


// O factory `listReceitas` verifica se as receitas existem, se não existir ele faz uma requisição para a url informada e guarda os dados com o `saveReceitas` para evitar fazer mais requisições.

// Um factory é um singleton então ele sempre tem que retornar um objeto.
