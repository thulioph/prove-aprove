// ==========================================
// Efetua request e usa localStorage
// ==========================================

var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href, text, that;

    that = this;

    // clique nos links da categoria
    $('#categories-list').on('click', 'a', function(event) {
      event.preventDefault();

      id = $(this).attr('data-id'); //valor

      APP.Request.ReceitasInterna.ajax(id);
      APP.OffCanvas.initialState(); // retorna o menu após o clique
    });


    // clique nas receitas da home
    $('.recipe-link').on('click', function(event) {
      event.preventDefault();

      var id = $(this).attr('data-id');
      APP.Request.ReceitasInterna.ajax(id);
    });


    // clique para listar minhas receitas
    $('#meu-usuario').on('click', function(event) {
      event.preventDefault();

      var user = 'leandro@gmail.com'; //email do usuário cadastrado no banco
      APP.Request.Receitas.Usuario.ajax(user);
      APP.OffCanvas.initialState(); // retorna o menu após o clique
    });
  },

  convertString: function(href, text) {
    var string = JSON.stringify(href);
    APP.Request.insertLocalStorage(string, text);
  },

  insertLocalStorage: function(string, text) {
    localStorage.setItem(text, string);
  },

  getLocalStorage: function(text, href) {
    if (localStorage.getItem(text) == null) {
      APP.Request.ajax(href, text); //se a chave não existir faz a requisição
    } else {
      var href = JSON.parse(localStorage.getItem(text));
      $('#main').html(href); // se existir, faz o parse e põe na tela
    }
  }
}
