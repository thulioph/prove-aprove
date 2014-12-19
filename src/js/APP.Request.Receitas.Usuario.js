// ==========================================
// Efetua request das receitas do usuário
// ==========================================

var APP = APP || {};
APP.Request = APP.Request || {};
APP.Request.Receitas = APP.Request.Receitas || {};
APP.Request.Receitas.Usuario = {
  setUp: function() {
  },

  ajax: function(user) {
    var that = this;

    $('#main').empty(); // remove conteúdo do main

    $.ajax({
      url: 'listar_receitas.php?filtro=usuario&id='+user,
      type: 'GET',
      dataType: 'JSON',

      beforeSend: function() {
        var main, section;
        main = document.querySelector('#main');

        section = document.createElement('section');
        section.setAttribute('id', 'recipes');
        section.innerHTML = 'Carregando conteúdo..';

        main.appendChild(section);
      },

      success: function(data) {
        $('#recipes').empty(); // remove mensagem de carregando

        if (data.status == true) {
          for (var i = 0; i < data.dados.length; i++) {
            var id = data.dados[i].id,
                titulo = data.dados[i].titulo,
                autor = data.dados[i].autor,
                categoria = data.dados[i].categoria,
                media = data.dados[i].media,
                gostou = data.dados[i].gostou,
                favorita = data.dados[i].favorita;

                // cria a estrutura da receita
                APP.Request.Receitas.structure(titulo, id);
          }

          // observa o clique na home
          APP.Request.setUp();

        } else if (data.status == false) {
          console.log(data.mensagem);
        }
      },

      error: function(error) {
        console.error(error);
      }
    });
  }
}
