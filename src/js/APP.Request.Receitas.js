// ==========================================
// Efetua request das receitas da home
// ==========================================

var APP = APP || {};
APP.Request = APP.Request || {};
APP.Request.Receitas = {
  setUp: function() {
  },

  ajax: function() {
    var that = this;

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
          $('#recipes-content').remove(); // remove mensagem de carregando

          for (var i = 0; i < data.dados.length; i++) {
            var id = data.dados[i].id,
                titulo = data.dados[i].titulo,
                autor = data.dados[i].autor,
                categoria = data.dados[i].categoria,
                media = data.dados[i].media,
                gostou = data.dados[i].gostou,
                favorita = data.dados[i].favorita;

                // cria a estrutura das receitas
                that.structure(titulo, id);
                that.structureCategorias(categoria, id);
          }

          // Pega o data-id do elemento
          APP.Request.getClick();

        } else if (data.status == false) {
          console.log(data.mensagem);
        }
      },

      error: function(error) {
        console.error(error);
      }
    });
  },

  structure: function(titulo, id) {
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
        a.setAttribute('href', '#');

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
  },

  structureCategorias: function(categoria, id) {
    var ul, li, a;

      ul = document.querySelector('#categories-list'),
      li = document.createElement('li'),
      a = document.createElement('a');

      // adiciona as classes
      li.classList.add('categories-item');
      a.classList.add('categories-link');

      // adiciona atributos
      a.setAttribute('href', '#');
      a.setAttribute('data-id', id);
      a.setAttribute('title', categoria);

      // insere o conteúdo
      a.innerHTML = categoria;

      // faz o append
      li.appendChild(a);
      ul.appendChild(li);
  }
}

