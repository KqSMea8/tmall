"use strict";var _createClass=function(){function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(s){function t(){_classCallCheck(this,t),this.loutinav=s("#loutinav"),this.navli=s("#loutinav li:not(.last)"),this.louceng=s(".louceng"),this.last=s(".last"),this.headheight=s(".new-floor-con").offset().top}(new(_createClass(t,[{key:"init",value:function(){var a=this;s(window).scroll(function(){var i=s(window).scrollTop()+s(window).height();i>=a.headheight+parseInt(a.louceng.first().height()/4)?(a.loutinav.show(),a.navli.first().css("background","#c00"),s(".as-shelter,#J_ASTotalContainer").addClass("show").removeClass("hide")):(a.loutinav.hide(),s(".as-shelter,#J_ASTotalContainer").addClass("hide").removeClass("show")),a.louceng.each(function(t,e){if(i>=s(e).offset().top&&i<=s(e).offset().top+s(e).height())return a.navli.removeClass("active"),a.navli.eq(t+1).addClass("active"),!1})}),s("#loutinav li").click(function(t){s(this).is("li")&&(s(this).hasClass("last")?s("html,body").animate({scrollTop:0}):(s(this).addClass("active").siblings("li").removeClass("active"),s("html,body").animate({scrollTop:s(".louceng").eq(s(this).index()-1).offset().top})))})}}]),t)).init()}(jQuery);