var APP  = APP || {};

APP.Navigation = {
	_lastActivePage: null,
	_activePage: null,
	_offCanvasLeft: "#off-canvas-left",
	_page: ".full-page",

	init: function() {
		APP.startModule(APP.Hammer);
		this.bindEvents();
	},

	bindEvents: function() {
		var that = this;
	},

	setActivePage: function(activePage){
		if(!APP.Functions.empty(activePage)){
			this._activePage = activePage;
		}
	},

	setLastActivePage: function(lastActivePage){
		if(!APP.Functions.empty(lastActivePage)){
			this._lastActivePage = lastActivePage;
		}
	},

	showMenu: function(){
		if(!$(this._offCanvasLeft).hasClass('active')){
			var lastActivePage = $(this._page+".active").attr('id');	
			this.setLastActivePage(lastActivePage);
			
			$(this._page).removeClass('active');
			$(this._offCanvasLeft).addClass('active');
			this.setActivePage(this._offCanvasLeft);
		}
	},

	hideMenu: function(){
		if($(this._offCanvasLeft).hasClass('active')){
			$(this._offCanvasLeft).removeClass('active');
			$("#"+this._lastActivePage).addClass('active');
			this.setActivePage(this._lastActivePage);
		}
	},

	moveElement: function(event){
		var modifier = null, 
				pointer0 = null, 
				target = event.target,
				boolOffCanvasLeft = false,
				maxPoint = false;

		if(!event.target.classList.contains('panLeftToClose')){
			target = $(event.target).closest('.full-page').get(0);
			if(!APP.Functions.empty(target) && target.id == "off-canvas-left"){
				boolOffCanvasLeft = true;
			}
		}
		
		pointer0 = event.pointers[0];
		modifier = parseInt(APP.Hammer._objVariables.clientXStart) - parseInt(pointer0.clientX);
		modifier = parseInt(APP.Hammer._objVariables.targetLeft) - modifier;

		if(event.type == 'panleft'){
			maxPoint = ((window.innerWidth / 2 * -1) < APP.Hammer._objVariables.targetCurrentLeft + 5) ? false : true;
		}else{
			maxPoint = ((window.innerWidth / 2) > (APP.Hammer._objVariables.targetCurrentLeft - 5)) ? false : true;
		}

		if(!APP.Functions.empty(modifier) && !APP.Functions.empty(target) && !boolOffCanvasLeft && !maxPoint){
			$(target).removeClass('transition-normal');
			target.style.left = modifier+"px";
		}
	},

	calculatePanEndPosition: function(event){
		var target = event.target;
		var targetCalculated = null;
		var pointer0 = event.pointers[0];
		var boolPanLeftClose = event.target.classList.contains('panLeftToClose');
		var boolOffCanvasLeft = false;

		if(!boolPanLeftClose){
			target = $(event.target).closest('.full-page').get(0);
			APP.Hammer._objVariables.targetLeft = 0;
			if(!APP.Functions.empty(target) && target.id == "off-canvas-left"){
				boolOffCanvasLeft = true;
			}
		}

		if(!APP.Functions.empty(target)){
			$(target).addClass('transition-normal');

			targetCalculated = APP.Hammer._objVariables.clientXStart - pointer0.clientX;
			
			if((targetCalculated > 50 || targetCalculated < -50) && (this._activePage != this._offCanvasLeft)){
				if(boolPanLeftClose){
					target.style.left = APP.Hammer._objVariables.targetLeft+"px";
				}else if(boolOffCanvasLeft){
					this.hideMenu();
					target.style.left = "0px";
				}else{
					this.showMenu();
					//var menuType = ((window.innerWidth / 2) > pointer0.clientX) ? true : false;
					var menuType = (APP.Hammer._objVariables.panLeftModifier > APP.Hammer._objVariables.panRightModifier) ? true : false;
					
					if(menuType){
						target.style.left = "-50%";
					}else{
						target.style.left = "50%";
					}
				}
			}else{
				if(!boolPanLeftClose){
					this.hideMenu();
				}
				target.style.left = APP.Hammer._objVariables.targetLeft+"px";
			}
		}
		
	}

};