!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],t):"object"==typeof exports?(require("gsap"),t(require("scrollmagic"),TweenMax,TimelineMax)):t(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,t,o){"use strict";var n="animation.gsap",i=window.console||{},r=Function.prototype.bind.call(i.error||i.log||function(){},i);e||r("("+n+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),t||r("("+n+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,i=this,r=function(){i._log&&(Array.prototype.splice.call(arguments,1,0,"("+n+")","->"),i._log.apply(this,arguments))};i.on("progress.plugin_gsap",function(){a()}),i.on("destroy.plugin_gsap",function(e){i.removeTween(e.reset)});var a=function(){if(e){var t=i.progress(),o=i.state();e.repeat&&-1===e.repeat()?"DURING"===o&&e.paused()?e.play():"DURING"===o||e.paused()||e.pause():t!==e.progress()&&(0===i.duration()?t>0?e.play():e.reverse():i.tweenChanges()&&e.tweenTo?e.tweenTo(t*e.duration()):e.progress(t).pause())}};i.setTween=function(n,l,s){var c;arguments.length>1&&(arguments.length<3&&(s=l,l=1),n=t.to(n,l,s));try{c=o?new o({smoothChildTiming:!0}).add(n):n,c.pause()}catch(u){return r(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),i}if(e&&i.removeTween(),e=c,n.repeat&&-1===n.repeat()&&(e.repeat(-1),e.yoyo(n.yoyo())),i.tweenChanges()&&!e.tweenTo&&r(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),e&&i.controller()&&i.triggerElement()&&i.loglevel()>=2){var g=t.getTweensOf(i.triggerElement()),d=i.controller().info("vertical");g.forEach(function(e,t){var o=e.vars.css||e.vars,n=d?void 0!==o.top||void 0!==o.bottom:void 0!==o.left||void 0!==o.right;return n?(r(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}if(parseFloat(TweenLite.version)>=1.14)for(var p,h,f=e.getChildren?e.getChildren(!0,!0,!1):[e],v=function(){r(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},w=0;w<f.length;w++)p=f[w],h!==v&&(h=p.vars.onOverwrite,p.vars.onOverwrite=function(){h&&h.apply(this,arguments),v.apply(this,arguments)});return r(3,"added tween"),a(),i},i.removeTween=function(t){return e&&(t&&e.progress(0).pause(),e.kill(),e=void 0,r(3,"removed tween (reset: "+(t?"true":"false")+")")),i}})}),$(document).ready(function(){"use strict";function e(e,t,o){var n;return function(){var i=this,r=arguments,a=function(){n=null,o||e.apply(i,r)},l=o&&!n;clearTimeout(n),n=setTimeout(a,t),l&&e.apply(i,r)}}var t,o=function(){var e=document.getElementById("mainWrap"),t=window.getComputedStyle(e,null).getPropertyValue("font-size"),o=parseFloat(t),n=window.getComputedStyle(e,null).getPropertyValue("width"),i=parseFloat(n),r=i/o,a=35.85,l=$(window).height();$(".fullheight").css("height",l),!Modernizr.touch&&r>=a?$(".fullheight-desktop").css("height",l):a>r&&$(".fullheight-desktop").css("height","auto")};o();var n=e(o,250);if(window.addEventListener("resize",n),!Modernizr.touch){var i=new ScrollMagic.Controller;t=new ScrollMagic.Scene({triggerElement:"#topCta"}).setTween("header",.5,{backgroundColor:"rgba(0,0,0,0.5)"}).addTo(i)}$('a[href^="#"]').on("click",function(e){e.preventDefault();var t=this.hash,o=$(t),n=function(){$("html, body").stop().animate({scrollTop:o.offset().top},900,"swing",function(){window.location.hash=t})};"topCta"===$(this).attr("id")?setTimeout(function(){n()},300):n()});var r=$("#mainNav").clone();r.attr("id","mobileNav");var a=$("#nav-toggle");$("#mainWrap").prepend(r),a.click(function(e){e.preventDefault(),$(this).toggleClass("active"),r.toggleClass("visible")}),$("#mobileNav").on("click","a",function(e){e.preventDefault(),a.toggleClass("active"),r.toggleClass("visible");var t=this.hash,o=$(t);$("html, body").stop().animate({scrollTop:o.offset().top},900,"swing",function(){window.location.hash=t})}),$("#topCta").hover(function(){$("#topPhoto").toggleClass("hover")}),$("#topCta").click(function(){$("#topPhoto").addClass("clicked"),setTimeout(function(){$("#topPhoto").removeClass("clicked")},1e3)})});