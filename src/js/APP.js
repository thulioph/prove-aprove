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
  .when('/user/adicionar-receita', {
    templateUrl: 'templates/adicionar-receita.html',
    controller: 'adicionarReceita'
  })
  .when('/user/minhas-receitas', {
    templateUrl: 'templates/minhas-receitas.html',
    controller: 'minhasReceitas'
  })
  .when('/user/receitas-favoritas', {
    templateUrl: 'templates/receitas-favoritas.html',
    controller: 'receitasFavoritas'
  })
  .when('/', {
    templateUrl: 'templates/splash.html',
    controller: 'splash'
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

app.controller('splash', function($scope) {
  console.log('Splash Screen');
});

app.controller('forgotPass', function($scope) {
  $scope.title = 'Esqueceu a senha';
});

app.controller('adicionarReceita', function($scope) {
  $scope.title = 'Adicionar Receita';
});

app.controller('minhasReceitas', function($scope) {
  $scope.title = 'Minhas Receitas';
});

app.controller('receitasFavoritas', function($scope) {
  $scope.title = 'Receitas Favoritas';
});

// adiciono uns parâmetros de rota através do $routeParams
// adiciono um filtro.
app.controller('receita', function($scope, $filter, $routeParams, ReceitaInterna) {
  $scope.title = 'Receita Interna';
  $scope.saudacao = 'Que tal fazer esta receita?';

  var meuFiltro = $filter;

  // chamando o método ReceitaInterna
  ReceitaInterna.getReceitasInterna(function(data) {
    $scope.receita = meuFiltro('filter')(data, {
      id: $routeParams.id
    })[0];
  });
});

app.controller('user', function($scope) {
  $scope.title = 'Usuário';
});

// abaixo eu injeto o factory ListReceitas no meu controller
app.controller('receitas', function($scope, ListReceitas) {
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

app.factory('ReceitaInterna', function ($http) {

  var listaReceitasInterna;
  var obj = {};

  obj = {
    getReceitasInterna: function(callback) {
      if (listaReceitasInterna) {
        callback(listaReceitasInterna);
        return false;
      } else {
        $http({
          method: 'GET',
          url: 'data/receitas-interna.json'
        }).success(function(data) {
          obj.saveReceitasInterna(data);
          callback(data);
        });
      }
    },
    saveReceitasInterna: function(data) {
      listaReceitasInterna = data;
    }
  }

  return obj;
});


// O factory `listReceitas` verifica se as receitas existem, se não existir ele faz uma requisição para a url informada e guarda os dados com o `saveReceitas` para evitar fazer mais requisições.

// Um factory é um singleton então ele sempre tem que retornar um objeto.
