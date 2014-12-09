var APP  = APP || {};

APP = {

	init: function() {
		//VENDORS
  	//minify click delay
		FastClick.attach(document.body);
		//OTHER
		this.startAllModules();
	},

  startAllModules: function(){
    this.startModule(APP.Navigation);
    this.startModule(APP.Home);
  },

  startModule: function(module){
	  if(typeof(module) == 'object'){
      if(typeof(module.init) == 'function'){
        module.init();
      }
	  }
	},

};

$(document).on("ready", function () { APP.init(); });