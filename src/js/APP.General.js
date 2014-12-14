var APP  = APP || {};
APP.General = {
  setUp: function() {
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
