/*======================================
App Storage Controler
======================================*/
var APP = APP || {};

APP.Storage = {
    init: function(){

    },

    getRecipeByCategory: function(url,success){
      this.loadAjax(url,success);
    },

    //AJAX
    loadAjax: function(url,success) {
      var that = this;

      $.ajax({
        type: "GET",
        url: url,
        //async: false,
        data: {},
        dataType: 'json',
        beforeSend: function() {
          that.loading.apply(that, arguments);
        },
        success: function(data, text, xhr) {
          console.log('load complete')
          success(arguments[0]);
        },
        error: function() {
          that.loadError.apply(that, arguments);
        }
      });
    },

    loading: function(){
      console.log('loading');
    },

    loadComplete: function(){
      console.log('load complete');
    },

    loadError: function(){
      console.log('erro');
    }
    //END AJAX
}
