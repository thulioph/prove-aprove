var APP  = APP || {};
APP.General = {
  setUp: function() {
    FastClick.attach(document.body);
    this.getClick();
    this.checkUrl();
  },

  getClick: function() {
    var back;

    back = document.querySelector('#back-internal');

    $(back).on('click', function(event) {
      window.history.back();
    });
  },

  checkUrl: function() {
    var url;

    url = 'http://localhost:9999/unibratec-pos/projeto-final/prove-aprove/app';

    if (location.href == url) {
      APP.General.ajaxListaReceitas();
    } else {
      return console.log('Diferente');
    }
  },

  ajaxListaReceitas: function() {
    $.ajax({
      url: 'listar_receitas.php',
      type: 'GET',
      dataType: 'JSON',

      beforeSend: function() {
        var recipes, recipesContent;

          recipes = document.querySelector('#recipes');

          recipesContent = document.createElement('div');
          recipesContent.setAttribute('id', 'recipes-content');
          recipesContent.innerHTML = 'Carregando conteúdo..';

          recipes.appendChild(recipesContent);
      },

      success: function(data) {
        if (data.status == true) {
          $('#recipes-content').remove(); // remove mensagem de carregando conteúdo

          for (var i = 0; i < data.dados.length; i++) {
            var id = data.dados[i].id,
                titulo = data.dados[i].titulo,
                autor = data.dados[i].autor,
                categoria = data.dados[i].categoria,
                media = data.dados[i].media,
                gostou = data.dados[i].gostou,
                favorita = data.dados[i].favorita;

                // console.log(id, titulo, autor, categoria, media, gostou, favorita);

                // cria a estrutura de receitas
                APP.General.createStructureListaReceitas(titulo, id);
          }

        } else if (dados.status == false) {
          console.log('Não tem dados!');
        }
      },

      error: function(error) {
        $('#recipes').text(error);
      }
    });
  },

  createStructureListaReceitas: function(titulo, id) {
    var recipes = document.querySelector('#recipes'),
        ul = document.createElement('ul'),
        li = document.createElement('li'),
        a = document.createElement('a'),
        h4 = document.createElement('h4'),
        figure = document.createElement('figure'),
        img = document.createElement('img');

        // adiciona as classes
        ul.classList.add('recipe-list');
        li.classList.add('recipe-item');
        a.classList.add('recipe-link');
        h4.classList.add('recipe-title');
        figure.classList.add('recipe-image');

        // adiciona atributos
        a.setAttribute('data-id', id);
        a.setAttribute('href', '#'+id);

        img.setAttribute('src', 'http://placehold.it/160x200');
        img.setAttribute('alt', titulo);

        // insere o conteúdo
        h4.innerHTML = titulo;

        // faz o append
        figure.appendChild(img);

        a.appendChild(h4);
        a.appendChild(figure);

        li.appendChild(a);

        recipes.appendChild(li);

        // recipes.appendChild(ul);
  }
};
