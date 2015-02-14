var app = angular.module('proveAprove', ['ngRoute']).config(function($routeProvider) {
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
});

app.controller('signin', function($scope) {
  $scope.nome = 'Signin';
});

app.controller('signup', function($scope) {
  console.log('Signup');
});

app.controller('forgotPass', function($scope) {
  console.log('Forgot Pass');
});

app.controller('receitas', function($scope) {
  console.log('Receitas');
});

app.controller('receita', function($scope) {
  console.log('Receita');
});
