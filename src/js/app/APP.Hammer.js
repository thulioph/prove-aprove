var APP  = APP || {};

APP.Hammer = {
	_target: "#main",
	_control: null,
	_objVariables: {},

	init: function() {
		this.initHammer();
		this.bindEvents();
	},

	bindEvents: function() {
		var that = this;

		document.addEventListener('touchmove', function(e) {
		  e.preventDefault();
		  //that.hashChangeHandler.apply(that, arguments);
		}, false);

		this._control.get('pinch').set({ enable: true });


		this._control.on("panmove panend panstart panleft panright swiperight swipeleft", function(event){
  		event.preventDefault();
		  //var pointer0 = event.pointers[0];
		  //ponteiro.style.left = pointer0.clientX+"px";
		  //ponteiro.style.top = pointer0.clientY+"px";
		  
		  if(event.type.match(/panstart/g)) {
		    that.panStartEventHandler.apply(that, arguments);
		  }

		  if(event.type.match(/swiperight/g)){
		    that.swipeRightEventHandler.apply(that, arguments);
		  }

		  if(event.type.match(/swipeleft/g)){
		    that.swipeLeftEventHandler.apply(that, arguments);
		  }

		  //panleft
		  if(event.type.match(/panleft/g)){
		    that.panLeftEventHandler.apply(that, arguments);
		  }

		  //panright
	   	if(event.type.match(/panright/g)){
		    that.panRightEventHandler.apply(that, arguments);
		  }
		  
		  if(event.type.match(/end/g)) {
		    that.panEndEventHandler.apply(that, arguments);
		  }
		})
	},

	initHammer: function(){
		var pad = document.querySelector(this._target);
		this._control = new Hammer(pad);
	},

	swipeRightEventHandler: function(){
		//APP.Navigation.showMenu();
	},

	swipeLeftEventHandler: function(){
		//APP.Navigation.hideMenu();
	},

	panStartEventHandler: function(event){
		this.setPanStartVariables(event);
	},

	panLeftEventHandler: function(event){
		APP.Navigation.moveElement(event);
	},

	panRightEventHandler: function(event){
		APP.Navigation.moveElement(event);
	},

	//panEn
	panEndEventHandler: function(event){
		APP.Navigation.calculatePanEndPosition(event);
		this.cleanPanVariables();
	},

	setPanStartVariables: function(event){	
		var target = event.target;

		if(!event.target.classList.contains('panLeftToClose')){
			target = $(event.target).closest('.full-page').get(0);
		}

		var	offset = $(target).offset();
		var offsetLeft = parseInt(offset.left);
		var pointer0 = event.pointers[0];

		this._objVariables = {
			targetLeft: offsetLeft,
			clientXStart: pointer0.clientX
		}
	},

	cleanPanVariables: function(){
		this._objVariables = {
			targetLeft: null,
			clientXStart: null
		}
	}
};