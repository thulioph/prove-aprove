var APP  = APP || {};
APP.General = {
  setUp: function() {
    FastClick.attach(document.body);
    this.getClick();
  },

  getClick: function() {
    var back;

    back = document.querySelector('#back-internal');

    $(back).on('click', function(event) {
      window.history.back();
    });
  }
};
