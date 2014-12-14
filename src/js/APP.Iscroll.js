var APP = APP || {};
APP.Iscroll = {
  setUp: function() {
    this.startIscroll();
  },

  startIscroll: function() {
    var recipes, myScroll;

    recipes = document.querySelector('#recipes');
    myScroll = new IScroll(recipes);

    console.log(myScroll);
  }
};
