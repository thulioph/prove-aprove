//Início de APP.Functions
//funções comuns do framework
var APP  = APP || {};

APP.Functions = {
	_bootstrapElements: null,

	//Quando iniciar o módulo
	init: function() {
	},


	strPos: function strpos (haystack, needle, offset) {
	    // Finds position of first occurrence of a string within another
	    //
	    // version: 1109.2015
	    // discuss at: http://phpjs.org/functions/strpos    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	    // +   improved by: Onno Marsman
	    // +   bugfixed by: Daniel Esteban
	    // +   improved by: Brett Zamir (http://brett-zamir.me)
	    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);    // *     returns 1: 14
	    var i = (haystack + '').indexOf(needle, (offset || 0));
	    return i === -1 ? false : i;
	},

	trim: function Trim(str){
		return str.replace(/^\s+|\s+$/g,"");
	},

	empty: function empty (mixed_var) {
	    // !No description available for empty. @php.js developers: Please update the function summary text file.
	    //
	    // version: 1109.2015
	    // discuss at: http://phpjs.org/functions/empty
	    // +   original by: Philippe Baumann
	    // +      input by: Onno Marsman
	    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	    // +      input by: LH
	    // +   improved by: Onno Marsman
	    // +   improved by: Francesco
	    // +   improved by: Marc Jansen
	    // +   input by: Stoyan Kyosev (http://www.svest.org/)
	    // *     example 1: empty(null);
	    // *     returns 1: true
	    // *     example 2: empty(undefined);
	    // *     returns 2: true
	    // *     example 3: empty([]);
	    // *     returns 3: true
	    // *     example 4: empty({});
	    // *     returns 4: true
	    // *     example 5: empty({'aFunc' : function () { alert('humpty'); } });
	    // *     returns 5: false
	    var key;

	    if (mixed_var === "" || mixed_var === 0 || mixed_var === "0" || mixed_var === null || mixed_var === false || typeof mixed_var === 'undefined') {
	        return true;
	    }

	    if (typeof mixed_var == 'object') {
	        for (key in mixed_var) {
	            return false;
	        }
	        return true;
	    }

	    return false;
	},

	//format text to show exactaly how it comes from db, with all spaces and breaklines
	nl2br: function(str, is_xhtml) {
    	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
	}
};