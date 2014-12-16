/*======================================
App Recipe Controler
======================================*/
var APP = APP || {};

APP.Recipe = {

    _initialized: false,
    _objVariables: null,
    //dbData variables
    _nameSpaceDb: null,
    _wraperContentDb: ".data-base-content",
    _storageContent: null,
    //other
    _moduleContainerSelector: '#wrap-home',
    _blockListSelector: ".block-list",
    _emptyMessage: "Nenhuma receita encontrada",
    _idCategory: 3,
    //

    init: function(){
        if(!this._initialized){
            this.getVariables();
            this.bindEvents();

            var url =  "listar_receitas.php?filtro=usuario&id=leandro@gmail.com";
            APP.Storage.getRecipeByCategory(url,this.ajaxSuccess);

            this._initialized = true;
        }else{
            //anything that should load, even if the module has already started.
        }
    },

    bindEvents: function(){
        var that = this;

        $(this._moduleContainerSelector + " " + this._blockListSelector).bind("tap", function(event) {
            that.clickEventHandler.apply(that, arguments);
        });

        /*
        $('.bt-user-routes').click(function(event){
            that.clickEventHandler.apply(that, arguments);
        });
        */
    },

    //getVariables
    //fill all dom variables, used by selectors
    //will not do it again, if objVariables != null
    getVariables: function(){
        if(this._objVariables == null){
            //container variables
            var container = document.querySelector(this._moduleContainerSelector);
            var wraperDbBlock = null;
            var blockList = null;

            if (container != null) {
                wraperDbBlock = container.querySelector(this._wraperContentDb);
                blockList = container.querySelector(this._blockListSelector);
            }

            this._objVariables = {
                container: container,
                wraperDbBlock: wraperDbBlock,
                blockList: blockList
            }
        }

        return this._objVariables;
    },

    ajaxSuccess: function(dataContent){
      var that = APP.Recipe;
      that._storageContent = dataContent.dados;
      console.dir(that._storageContent);
      that.showStorageContent();
    },

    showStorageContent: function(){
        if(this._storageContent.length > 0){
            this._objVariables.wraperDbBlock.innerText = "";
            var documentFragment = document.createDocumentFragment();
            for(var i = 0, length = this._storageContent.length; i < length; i++){
                var dbBlock = this.createDbBlock(this._storageContent[i]);
                documentFragment.appendChild(dbBlock);
            }

            this._objVariables.wraperDbBlock.appendChild(documentFragment);
        }else{
            var span = document.createElement('span');
            span.classList.add('link-empty-list');
            span.textContent = this._emptyMessage;
            this._objVariables.wraperDbBlock.innerText = "";
            this._objVariables.wraperDbBlock.appendChild(span);
        }
    },

    createDbBlock: function(storageContent){
        var a = document.createElement('a');

        a.setAttribute('data-id',storageContent.id);
        a.textContent = storageContent.titulo;

             console.log(a);

        return a;
    }
}
