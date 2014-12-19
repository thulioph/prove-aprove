// ==========================================
// Chamadas gerais para diversas coisas
// ==========================================

var APP  = APP || {};
APP.General = {
  setUp: function() {
    FastClick.attach(document.body);

    this.redirect();
    this.checkBody();
  },

  // retorna um nível
  goBack: function() {
    var back, href;

    back = document.querySelector('#back-internal');
    href = window.location.href;

    $(back).on('click', function(event) {
      event.preventDefault();
      window.location.href = href;
    });
  },

  // checa o body para a requisição
  checkBody: function() {
    var app;

    app = $('body').attr('data-screen');

    if (app == 'app') {
      APP.Request.Receitas.ajax();
    } else {
      return console.log('Diferente');
    }
  },

  // leva o usuário no cliqe até a index
  redirect: function() {
    var appSteps, href;

    href = window.location.href;
    appSteps = document.querySelector('#app-steps');

    $(appSteps).on('click', 'button', function(event) {
      window.location.href = href + this.id;
    });
  }
};
