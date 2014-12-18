// ==========================================
// Chamadas gerais para diversas coisas
// ==========================================

var APP  = APP || {};
APP.General = {
  setUp: function() {
    FastClick.attach(document.body);

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

  getLocalStorageListaReceitas: function(key) {
    if (localStorage.getItem(key) == null) {
      APP.Request.ajax(href, key);
    } else {
      var href = JSON.parse(localStorage.getItem(key)); // parse of localStorage
      $('#main').html(href);
    }
  },

  ajaxListaReceitas: function() { // lista todas as receitas em /app
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

          APP.General.getLocalStorageListaReceitas('app');

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
                APP.General.createStructureCategories(categoria, id);
          }

          APP.General.getIdReceita(); // pega o data-id do elemento

          var data = $('#main').html();
          APP.Request.convertString(data, 'app'); // converte pra string e guarda no localstorage pra acessar no back.

        } else if (dados.status == false) {
          console.log('Não tem dados!');
        }
      },

      error: function(error) {
        $('#recipes').text(error);
      }
    });
  },

  createStructureListaReceitas: function(titulo, id) { //cria a estrutura das receitas em /app
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

  getIdReceita: function() { // pega o id da receita no click em /app
    $('.recipe-link').on('click', function(event) {
      event.preventDefault();
      var id = $(this).attr('data-id');

      APP.General.ajaxReceitaInterna(id); //faz a requisição
    });
  },

  createStructureCategories: function(categoria, id) { // insere as categorias no menu
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
  },

  ajaxReceitaInterna: function(id) { //faz o ajax para mostrar /receita-interna
    $.ajax({
      url: 'listar_receitas.php?filtro=receita&id='+id,
      type: 'GET',
      dataType: 'JSON',

      beforeSend: function() {
        console.log('Carregando...');
      },

      success: function(data) {
        if (data.status == true) {
          for (var i = 0; i < data.dados.length; i++) {
            var titulo = data.dados[i].titulo,
                autor = data.dados[i].autor,
                categoria = data.dados[i].categoria,
                media = data.dados[i].media,
                gostou = data.dados[i].gostou,
                favorita = data.dados[i].favorita;

                // monta a estrutura no /receita-interna
                APP.General.createStructureReceitaInterna(titulo, autor, categoria, media, gostou, favorita);
          }

          // pega o click do botão de voltar
          APP.General.getClick();
        } else {
          console.log('Status FALSE');
        }
      },

      error: function(error) {
        $('#main').text(error);
      }
    });
  },

  createStructureReceitaInterna: function(titulo, autor, categoria, media, gostou, favorita) { //cria a estrutura da receita interna
      //create elements
      var h3 = document.createElement('h3'),
          aside = document.createElement('aside'),

          header = document.createElement('header'),
          divImage = document.createElement('div'),
          h3Header = document.createElement('h3'),
          pHeader = document.createElement('p'),

          divPreparation = document.createElement('div'),
          ulPreparation = document.createElement('ul'),
          liPreparation = document.createElement('li'),
          pPreparation = document.createElement('p'),

          footer = document.createElement('footer'),

          divOptions = document.createElement('div'),
          labelOptions = document.createElement('label'),
          inputOptions = document.createElement('input'),

          divAvaliar = document.createElement('div'),
          labelAvaliar = document.createElement('label'),
          selectAvaliar = document.createElement('select'),
          optionsAvaliar = document.createElement('option'),

          divFavoritar = document.createElement('div'),
          labelFavoritar = document.createElement('label'),
          inputFavoritar = document.createElement('input'),

          button = document.createElement('button');

      // add classes
        h3.classList.add('greeting');
        h3.classList.add('text-info');

        aside.classList.add('recipes-info');

        divImage.classList.add('image');
        pHeader.classList.add('recipes-time');

        divPreparation.classList.add('recipes-preparation');
        divPreparation.setAttribute('id', 'recipes-preparation');

        footer.classList.add('recipes-options');

        divOptions.classList.add('col-xs-4');
        inputOptions.classList.add('approve');
        labelOptions.setAttribute('for', 'aprovaReceita');
        inputOptions.setAttribute('type', 'radio');
        inputOptions.setAttribute('id', 'aprovaReceita');
        inputOptions.setAttribute('class', 'approve');
        inputOptions.setAttribute('value', 'option1');

        divAvaliar.classList.add('col-xs-4');
        selectAvaliar.classList.add('form-control');

        divFavoritar.classList.add('col-xs-4');
        labelFavoritar.setAttribute('for', 'favoritaReceita');
        inputFavoritar.classList.add('favorite');
        inputFavoritar.setAttribute('type', 'radio');
        inputFavoritar.setAttribute('id', 'favoritaReceita');
        inputFavoritar.setAttribute('value', 'value2');

        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-lg');
        button.classList.add('btn-block');
        button.setAttribute('id', 'back-internal');

      // add conteudo
        h3.innerHTML = 'Que tal fazer esta receita?';
        h3Header.innerHTML = titulo;

        labelOptions.innerHTML = 'Você aprova esta receita?';

        labelAvaliar.innerHTML = 'Você avalia esta receita?';

        optionsAvaliar.innerHTML = '1';

        labelFavoritar.innerHTML = 'Você favorita esta receita?';

        button.innerHTML = 'Voltar';

      // append
        header.appendChild(divImage);
        header.appendChild(h3Header);
        header.appendChild(pHeader);

        divOptions.appendChild(labelOptions);
        divOptions.appendChild(inputOptions);

        divAvaliar.appendChild(labelAvaliar);
        divAvaliar.appendChild(selectAvaliar);
        selectAvaliar.appendChild(optionsAvaliar);

        divPreparation.appendChild(ulPreparation);
        ulPreparation.appendChild(liPreparation);
        divPreparation.appendChild(pPreparation);

        divFavoritar.appendChild(labelFavoritar);
        divFavoritar.appendChild(inputFavoritar);

        footer.appendChild(divOptions);
        footer.appendChild(divAvaliar);
        footer.appendChild(divFavoritar);

        aside.appendChild(header);
        aside.appendChild(divPreparation);
        aside.appendChild(footer);

      var main = document.querySelector('#main');
          main.innerHTML = '';
          main.appendChild(h3);
          main.appendChild(aside);
          main.appendChild(button);
  },

  // Direciona o usuário até a index
  goBack: function() {
    var appSteps, href;

    href = window.location.href;
    appSteps = document.querySelector('#app-steps');

    $(appSteps).on('click', 'button', function(event) {
      window.location.href = href + this.id;
    });
  }
};
