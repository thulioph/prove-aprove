var APP  = APP || {};

APP.Navigation = {
	_lastActivePage: null,
	_offCanvasLeft: "#off-canvas-left",
	_page: ".full-page",

	init: function() {
		APP.startModule(APP.Hammer);
		this.bindEvents();
	},

	bindEvents: function() {
		var that = this;
	},

	setLastActivePage: function(lastActivePage){
		if(!APP.Functions.empty(lastActivePage)){
			this._lastActivePage = lastActivePage;
		}
	},

	showMenu: function(){
		if(!$(this._offCanvasLeft).hasClass('active')){
			var lastActivePage = $(this._page+".active").attr('id');
			console.log("valor"+lastActivePage);
			this.setLastActivePage(lastActivePage);
			console.log("valor2"+this._lastActivePage);
			
			$(this._page).removeClass('active');
			$(this._offCanvasLeft).addClass('active');
		}
	},

	hideMenu: function(){
		if($(this._offCanvasLeft).hasClass('active')){
			$(this._offCanvasLeft).removeClass('active');
			$("#"+this._lastActivePage).addClass('active');
		}
	},

	moveLeftElement: function(event){
		if(event.target.id=="maisum"){
			var pointer0 = event.pointers[0];
			var modifier = parseInt(APP.Hammer._objVariables.clientXStart) - parseInt(pointer0.clientX);
			var left = parseInt(APP.Hammer._objVariables.targetLeft) - modifier;
			
			console.log('APP.Hammer._objVariables.clientXStart: ' + APP.Hammer._objVariables.clientXStart);
			console.log('pointer0.clientX: ' + pointer0.clientX);
			console.log('modifier: ' + modifier);
			console.log('left: ' + left);
			console.log('APP.Hammer._objVariables.targetLeft: ' + APP.Hammer._objVariables.targetLeft);

			if(!APP.Functions.empty(left)){
				event.target.style.left = left+"px";
			}
	  	//event.target.style.top = pointer0.clientY+"px";
  	}
		
	},

	moveRightElement: function(element){
		var offset = $(element).offset();
		var offsetLeft = parseInt(offset.left);
		
		console.log(offsetLeft);

		if(offsetLeft > 20){
			$(element).css('left',(offsetLeft-10)+"px");
		}
	}

};