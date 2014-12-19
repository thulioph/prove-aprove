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

      id = $(this).attr('data-id');
      APP.Storage.getStorageReceitasInterna('categoria'+id, 'listar_receitas.php?filtro=receita&id='+id);

      APP.OffCanvas.initialState(); // retorna o menu após o clique
    });


    // clique nas receitas da home
    $('.recipe-link').on('click', function(event) {
      event.preventDefault();

      var id = $(this).attr('data-id');
      APP.Storage.getStorageReceitasInterna('categoria'+id, 'listar_receitas.php?filtro=receita&id='+id);
    });


    // clique para listar minhas receitas
    $('#meu-usuario').on('click', function(event) {
      event.preventDefault();

      var user = 'leandro@gmail.com'; //email do usuário cadastrado no banco
      APP.Request.Receitas.Usuario.ajax(user);
      APP.OffCanvas.initialState(); // retorna o menu após o clique
    });
  }
}
