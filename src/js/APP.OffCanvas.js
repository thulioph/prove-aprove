var APP  = APP || {};
APP.OffCanvas = {
  setUp: function() {
    this.linksHeader();
  },

  linksHeader: function() {
    $('#header-primary').on('click', 'a', function(event) {
      event.preventDefault();

      var href = $(this).attr('href');

      APP.OffCanvas.showContent(href);
      APP.OffCanvas.pushMain(href);
    });
  },

  showContent: function(href) {
    $(href).toggleClass('open');
  },

  pushMain: function(href) {
    var href = href.replace('#', '');

    $('#main section').toggleClass('js-open-' + href);
  }
};
