// ==========================================
// Chamadas gerais para diversas coisas
// ==========================================

var APP  = APP || {};
APP.General = {
  setUp: function() {
    FastClick.attach(document.body);

    this.redirect();
    this.checkUrl();
  },

  // retorna um nível
  goBack: function() {
    var back, href;

    back = document.querySelector('#back-internal');
    href = window.location.href;

    $(back).on('click', function(event) {
      event.preventDefault();
      window.location.href = href;
      // window.history.back();
    });
  },

  // checa a url para a requisição
  checkUrl: function() {
    var url;

    url = 'http://localhost:9999/unibratec-pos/projeto-final/prove-aprove/app';

    if (location.href == url) {
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
