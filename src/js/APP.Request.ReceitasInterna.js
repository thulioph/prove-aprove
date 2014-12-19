// ==========================================
// Efetua request das receitas interna
// ==========================================

var APP = APP || {};
APP.Request = APP.Request || {};
APP.Request.ReceitasInterna = {
  setUp: function() {
  },

  ajax: function(id) {
    var that = this;

    $('#recipes').remove(); // remove conteúdo da home

    $.ajax({
      url: 'listar_receitas.php?filtro=receita&id='+id,
      type: 'GET',
      dataType: 'JSON',

      beforeSend: function() {
        var main, section;
        main = document.querySelector('#main');

        section = document.createElement('section');
        section.setAttribute('id', 'recipes-internal');
        section.innerHTML = 'Carregando conteúdo..';

        main.appendChild(section);
      },

      success: function(data) {
        $('#recipes-internal').remove(); // remove mensagem de carregando

        if (data.status == true) {
          for (var i = 0; i < data.dados.length; i++) {
            var id = data.dados[i].id,
                titulo = data.dados[i].titulo,
                modoDePreparo = data.dados[i].modoDePreparo,
                tempoDePreparo = data.dados[i].tempoDePreparo,
                rendimento = data.dados[i].rendimento,
                autor = data.dados[i].autor,
                categoria = data.dados[i].categoria,
                media = data.dados[i].media,
                gostou = data.dados[i].gostou,
                favorita = data.dados[i].favorita,
                ingredientes = data.dados[i].ingredientes;

                // cria a estrutura da receita
                that.structure(id, titulo, modoDePreparo, tempoDePreparo, rendimento, autor, categoria, media, gostou, favorita, ingredientes);
          }

          // pega o click do botão e volta
          APP.General.goBack();

        } else if (data.status == false) {
          console.log(data.mensagem);
        }
      },

      error: function(error) {
        console.error(error);
      }
    });
  },

  structure: function(id, titulo, modoDePreparo, tempoDePreparo, rendimento, autor, categoria, media, gostou, favorita, ingredientes) {
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
      pHeader.innerHTML = tempoDePreparo + ' - ' + rendimento;

      liPreparation.innerHTML = ingredientes;
      pPreparation.innerHTML = modoDePreparo;

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
  }
}
