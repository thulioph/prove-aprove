var APP  = APP || {};
APP.Redirect = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var appSteps, href;

    href = window.location.href;
    appSteps = document.querySelector('#app-steps');

    $(appSteps).on('click', 'button', function(event) {
      window.location.href = href + this.id;
    });
  }
};
