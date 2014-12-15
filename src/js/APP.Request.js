var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href, text;

    $('#categories-list').on('click', 'a', function(event) {
      event.preventDefault();

      href = $(this).attr('href');
      text = $(this).text();

      APP.Request.getLocalStorage(text, href);
      APP.OffCanvas.initialState();
    });
  },

  ajax: function(href, text) {
    $.ajax({
      url: href,

      beforeSend: function() {
        $('#main').html('Carregando conteúdo...');
      },

      success: function(href) {
        $('#main').html(href);
        APP.Request.convertString(href, text);
      },

      error: function(error) {
        console.error(error);
      }
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
      APP.Request.ajax(href, text);
    } else {
      var href = JSON.parse(localStorage.getItem(text)); // parse of localStorage
      $('#main').html(href);
    }
  }
}
