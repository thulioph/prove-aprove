var APP  = APP || {};

APP.Navigation = {
	_lastActivePage: "#wrap-home",
	_activePage: "#wrap-home",
	_offCanvasLeft: "#off-canvas-left",
	_page: ".full-page",
	_mainMenu: ".main-nav",
	_userConfigMenu: ".user-config-nav",
	_activeMenu: null,
	_lastActiveMenu: null,

	setUp: function() {
    // APP.Hammer.setUp();
		this.bindEvents();
	},

	bindEvents: function() {
		var that = this;

		$(".open-main-menu").click(function(){
			that.openMainMenuEventHandler.apply(that, arguments);
		});

		$(".open-user-menu").click(function(){
			that.openUserMenuEventHandler.apply(that, arguments);
		})

		$(".change-page").click(function(){
			that.changePageEventHandler.apply(that, arguments);
		})
	},

	openMainMenuEventHandler: function(){
		this.showMenu(this._mainMenu);
	},

	openUserMenuEventHandler: function(){
		this.showMenu(this._userConfigMenu);
	},

	changePageEventHandler: function(event){
		var id = event.target.getAttribute('data-id');
		console.log(id);
		if(!APP.Functions.empty(id)){
			this.changePage(id);
		}
	},

	setActivePage: function(activePage){
		if(!APP.Functions.empty(activePage)){
			this._activePage = activePage;
		}
	},

	setLastActivePage: function(lastActivePage){
		if(!APP.Functions.empty(lastActivePage)){
			if(!lastActivePage.match(/#/g)) {
				lastActivePage = "#"+lastActivePage;
			}
			this._lastActivePage = lastActivePage;
		}
	},

	setLastActiveMenu: function(){
		this._lastActiveMenu = this._activeMenu;
		this._activeMenu = null;
	},

	showMenu: function(type){
		var boolType = (APP.Functions.empty(type))? true : false;

		if(!$(this._offCanvasLeft).hasClass('active')){
			if(!boolType && !APP.Functions.empty(this._activePage)){
				var modifier = "50%";
				this._activeMenu = this._mainMenu;

				if(type != this._mainMenu){
					modifier = "-50%";
					this._activeMenu = this._userConfigMenu;
				}

				$(this._activePage).get(0).style.left = modifier;
			}

			var lastActivePage = $(this._page+".active").attr('id');
			this.setLastActivePage(lastActivePage);

			$(this._page).removeClass('active');
			$(this._offCanvasLeft).addClass('active');
			this.setActivePage(this._offCanvasLeft);

		}else{
			this.hideMenu();
			if(this._lastActiveMenu != type){
				this.showMenu(type);
			}
		}

	},

	hideMenu: function(){
		if($(this._offCanvasLeft).hasClass('active')){
			$(this._offCanvasLeft).removeClass('active');
			$(this._lastActivePage).addClass('active');
			$(this._lastActivePage).get(0).style.left = 0;
			this.setActivePage(this._lastActivePage);
			this.setLastActiveMenu();
		}
	},

	changePage: function(id){
		$(this._page).addClass('transition-normal')
								 .removeClass('active');

		$(this._page).css('left','100%');
		$(this._offCanvasLeft).css('left','0%');
		$(id).css('left',"0%");

		$(id).addClass('active');
		this.setActivePage(id);
		this.setLastActivePage(id);

		if(!id.match(/#/g)) {
			console.log("WARNING: data-id must have '#'");
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
				}else{
					this.showMenu();
					var menuType = (APP.Hammer._objVariables.panLeftModifier > APP.Hammer._objVariables.panRightModifier) ? true : false;

					if(menuType){
						target.style.left = "-50%";
						this._activeMenu = this._userConfigMenu;
					}else{
						target.style.left = "50%";
						this._activeMenu = this._mainMenu;
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
