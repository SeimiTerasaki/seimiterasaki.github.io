(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+ZrZ":function(e,t,r){"use strict";var n=r("8OQS"),i=r("TqRt");t.__esModule=!0,t.default=function(e){e.exit,e.entry,e.fade;var t=e.duration,r=n(e,["exit","entry","fade","duration"]),i=t||.8;return o.default.createElement(u.default,(0,a.default)({exit:{length:i,zIndex:1,trigger:function(e){var t=e.exit,r=e.node;return c({exit:t,node:r,direction:"out"})}},entry:{length:0,trigger:function(e){var t=e.exit,r=e.node;return c({exit:t,node:r,direction:"in"})}}},r,{__self:this,__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Fade.js",lineNumber:36,columnNumber:3}}),r.children)};var a=i(r("pVnL")),o=i(r("q1tI")),u=i(r("plVc")),l=i(r("z/o8")),c=function(e){var t=e.exit.length,r=e.node,n=e.direction,i="out"===n?t+t/4:t,a="in"===n?1:0,o=document.scrollingElement&&document.scrollingElement.scrollTop||document.body.scrollTop||window.pageYOffset,u="out"===n?{overflowY:"hidden",height:"100vh",scrollTop:o}:{};return l.default.timeline().set(r,u).fromTo(r,{opacity:!a},{opacity:a,duration:i})}},AbOF:function(e,t,r){"use strict";var n=r("8OQS"),i=r("PJYZ"),a=r("VbXa"),o=r("TqRt"),u=r("284h");t.__esModule=!0,t.default=void 0;var l=o(r("pVnL")),c=u(r("q1tI")),s=o(r("plVc")),h=o(r("z/o8")),f=o(r("uxXc")),d=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRipple=function(e,t,r,n,i){var a=e.length,o=document.body,u=document.createElement("canvas"),l=u.getContext("2d"),c=2*Math.PI,s=r?f.default.hex.rgb(r).join(","):"0,0,255";s=n?f.default.keyword.rgb(n):s,u.style.zIndex=1e4,u.style.top=0,u.style.position="fixed";var d=u.width=window.innerWidth,p=u.height=window.innerHeight;o.appendChild(u);var g=t.clientX,v=t.clientY,m=g<d/2?d-g:g,y=v<p/2?p-v:v,b=Math.sqrt(m*m+y*y),w={alpha:0,radius:0,x:g,y:v},x=a;h.default.timeline({onUpdate:function(){l.clearRect(0,0,d,p),l.beginPath(),l.arc(w.x,w.y,w.radius,0,c,!1);var e="rgba("+s+","+w.alpha+")";l.fillStyle=e,l.fill()},onComplete:function(){return function(e){void 0===e&&(e=0);setTimeout((function(){o.removeChild(u)}),e)}(x/3)}}).to(w,{alpha:1,duration:x/4}).to(w,{radius:b,ease:"power1.easeIn",duration:x-x/3},0).set(i,{visibility:"hidden"}).to(u,{x:"100%",ease:"power1.easeIn",duration:x/3},"+="+.4*x),window.addEventListener("resize",(function(){d=u.width=window.innerWidth,p=u.height=window.innerHeight}))},r.getDirection=function(e){switch(e){case"left":return{xPercent:-5};case"right":return{xPercent:5};case"top":return{yPercent:-5};case"bottom":return{yPercent:5};default:return{}}},r.slideIn=function(e,t,n){var i=e.length;h.default.from(t,i,Object.assign({},r.getDirection(n),{ease:"power1.easeOut"}))},r.onResize=function(){r.vw=r.canvas.width=window.innerWidth,r.vh=r.canvas.height=window.innerHeight},r.createRipple=r.createRipple.bind(i(r)),r}a(t,e);var r=t.prototype;return r.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},r.render=function(){var e=this,t=this.props,r=(t.exit,t.entry,t.paintDrip,t.duration),i=t.direction,a=void 0===i?"left":i,o=n(t,["exit","entry","paintDrip","duration","direction"]),u=r||1,h=u/1.75;return c.default.createElement(c.default.Fragment,null,c.default.createElement(s.default,(0,l.default)({exit:{length:u,trigger:function(t){var r=t.exit,n=t.e,i=t.node;return e.createRipple(r,n,o.hex,o.color,i)}},entry:{delay:h,length:u,trigger:function(t){var r=t.entry,n=t.node;return e.slideIn(r,n,a)}}},o,{__self:this,__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/PaintDrip.js",lineNumber:145,columnNumber:5}}),o.children))},t}(c.Component);t.default=d},LbRr:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),a=r("kOA+"),o=r.n(a);t.a=function(){return i.a.createElement("header",{className:"w-full absolute top-0 left-0 z-10"},i.a.createElement("div",{className:"header bg-transparent"},i.a.createElement("div",{className:"w-full px-12 py-8"},i.a.createElement("div",{className:"text-3xl font-heading text-center log-container"},i.a.createElement(o.a,{cover:!0,direction:"up",duration:1,bg:"#fff",className:"text-222 no-underline",to:"/"},i.a.createElement("span",{className:"first-letter"},"S"),i.a.createElement("span",{className:"second-letter"},"T"))))))}},T016:function(e,t,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},"kOA+":function(e,t,r){"use strict";var n=r("8OQS"),i=r("TqRt");t.__esModule=!0,t.default=function(e){var t=e.children,r=n(e,["children"]);return o.default.createElement(o.default.Fragment,null,r.cover&&o.default.createElement(u.default,(0,a.default)({},r,{__self:this,__source:{fileName:d,lineNumber:13,columnNumber:20}}),t),r.fade&&o.default.createElement(l.default,(0,a.default)({},r,{__self:this,__source:{fileName:d,lineNumber:14,columnNumber:19}}),t),r.paintDrip&&o.default.createElement(c.default,(0,a.default)({},r,{__self:this,__source:{fileName:d,lineNumber:15,columnNumber:24}}),t),r.swipe&&o.default.createElement(s.default,(0,a.default)({},r,{__self:this,__source:{fileName:d,lineNumber:16,columnNumber:20}}),t),!!r.morph&&o.default.createElement(f.default,(0,a.default)({},r,{__self:this,__source:{fileName:d,lineNumber:17,columnNumber:22}}),t),!r.cover&&!r.fade&&!r.paintDrip&&!r.swipe&&!r.morph&&o.default.createElement(h.default,(0,a.default)({},r,{__self:this,__source:{fileName:d,lineNumber:24,columnNumber:6}}),t))};var a=i(r("pVnL")),o=i(r("q1tI")),u=i(r("tiwY")),l=i(r("+ZrZ")),c=i(r("AbOF")),s=i(r("mc3b")),h=i(r("plVc")),f=i(r("noOv")),d="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/index.js"},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(N){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),o=new _(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return E()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var u=w(o,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var s={};function h(){}function f(){}function d(){}var p={};p[i]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(M([])));v&&v!==t&&r.call(v,i)&&(p=v);var m=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(i,a){function o(){return new t((function(n,o){!function n(i,a,o,u){var l=c(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(h).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,u)}))}u(l.arg)}(i,a,n,o)}))}return n=n?n.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function M(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,f.displayName=u(d,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,o,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new b(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(m),u(m,o,"Generator"),m[i]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:M(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},mc3b:function(e,t,r){"use strict";var n=r("8OQS"),i=r("TqRt");t.__esModule=!0,t.default=function(e){e.exit,e.entry,e.swipe;var t=e.entryOffset,r=void 0===t?40:t,i=n(e,["exit","entry","swipe","entryOffset"]),l=i.top||"exit",c=i.duration||.7,s=c/3.5,h="entry"===l?1:0,d="exit"===l?1:0;return o.default.createElement(u.default,(0,a.default)({exit:{length:c,trigger:function(e){var t=e.node,n=e.exit;return f({node:t,exit:n,direction:i.direction,top:l,entryOffset:r,triggerName:"exit"})},zIndex:d},entry:{length:s,trigger:function(e){var t=e.node,n=e.exit;return f({node:t,exit:n,direction:i.direction,top:l,entryOffset:r,triggerName:"entry"})},zIndex:h}},i,{__self:this,__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Swipe.js",lineNumber:106,columnNumber:3}}),i.children)};var a=i(r("pVnL")),o=i(r("q1tI")),u=i(r("plVc")),l=i(r("z/o8")),c="0 0 100px 10px rgba(0, 0, 0, 0.12941176470588237)",s=function(e,t){var r=t?"-":"+",n=t?"+":"-";switch(e){case"down":return{y:r+"=100vh",ease:"power1.easeIn"};case"up":return{y:n+"=100vh",ease:"power1.easeIn"};case"left":return{x:n+"=100%",ease:"power1.easeIn"};default:return{x:r+"=100%",ease:"power1.easeIn"}}},h=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=40);var n=t?"-":"",i=t?"":"-";switch(e){case"down":return{y:""+i+r+"vh",ease:"power1.easeIn"};case"up":return{y:""+n+r+"vh",ease:"power1.easeIn"};case"left":return{x:""+n+r+"%",ease:"power1.easeIn"};default:return{x:""+i+r+"%",ease:"power1.easeIn"}}},f=function(e){var t=e.node,r=e.exit,n=e.direction,i=e.top,a=e.triggerName,o=e.entryOffset,u=document.scrollingElement&&document.scrollingElement.scrollTop||document.body.scrollTop||window.pageYOffset;return"entry"===a&&"entry"===i?l.default.timeline().set(t,{boxShadow:c,overflowY:"hidden",height:"100vh",scrollTop:u}).from(t,Object.assign({},s(n,!0),{duration:r.length})).set(t,{overflowY:"initial"}):"entry"===a?l.default.timeline().from(t,Object.assign({},h(n,!1,o),{duration:r.length})):"exit"===a&&"exit"===i?l.default.timeline().set(t,{boxShadow:c,overflowY:"hidden",height:"100vh",scrollTop:u}).to(t,Object.assign({},s(n),{duration:r.length})).set(t,{overflowY:"initial"}):l.default.timeline().set(t,{boxShadow:c,overflowY:"hidden",height:"100vh",scrollTop:u}).to(t,Object.assign({},h(n,!0,o),{duration:r.length})).set(t,{overflowY:"initial"})}},noOv:function(e,t,r){"use strict";var n=r("o0o1"),i=r("yXPU"),a=r("TqRt");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),u=a(r("plVc")),l=a(r("z/o8")),c=function(e){var t,r=e.children,a=e.to,c=e.duration,s=e.morph;return o.default.createElement(u.default,{to:a,exit:{length:c},entry:{appearAfter:c},trigger:(t=i(n.mark((function e(t){var r,i,a,o,u;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.exit;case 2:return r=e.sent,e.next=5,t.entry;case 5:i=e.sent,a=r.node.querySelector(s.from),o=i.node.querySelector(s.to),u={height:o.offsetHeight,width:o.offsetWidth},l.default.to(a,{width:u.width,height:u.height,duration:c});case 10:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)}),__self:void 0,__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/MorphTo.js",lineNumber:6,columnNumber:2}},r)};t.default=c},o0o1:function(e,t,r){e.exports=r("ls82")},onlc:function(e,t,r){var n=r("t1N5");function i(e){var t=function(){for(var e={},t=Object.keys(n),r=t.length,i=0;i<r;i++)e[t[i]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;)for(var i=r.pop(),a=Object.keys(n[i]),o=a.length,u=0;u<o;u++){var l=a[u],c=t[l];-1===c.distance&&(c.distance=t[i].distance+1,c.parent=i,r.unshift(l))}return t}function a(e,t){return function(r){return t(e(r))}}function o(e,t){for(var r=[t[e].parent,e],i=n[t[e].parent][e],o=t[e].parent;t[o].parent;)r.unshift(t[o].parent),i=a(n[t[o].parent][o],i),o=t[o].parent;return i.conversion=r,i}e.exports=function(e){for(var t=i(e),r={},n=Object.keys(t),a=n.length,u=0;u<a;u++){var l=n[u];null!==t[l].parent&&(r[l]=o(l,t))}return r}},t1N5:function(e,t,r){var n=r("T016"),i={};for(var a in n)n.hasOwnProperty(a)&&(i[n[a]]=a);var o=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var u in o)if(o.hasOwnProperty(u)){if(!("channels"in o[u]))throw new Error("missing channels property: "+u);if(!("labels"in o[u]))throw new Error("missing channel labels property: "+u);if(o[u].labels.length!==o[u].channels)throw new Error("channel and label counts mismatch: "+u);var l=o[u].channels,c=o[u].labels;delete o[u].channels,delete o[u].labels,Object.defineProperty(o[u],"channels",{value:l}),Object.defineProperty(o[u],"labels",{value:c})}o.rgb.hsl=function(e){var t,r,n=e[0]/255,i=e[1]/255,a=e[2]/255,o=Math.min(n,i,a),u=Math.max(n,i,a),l=u-o;return u===o?t=0:n===u?t=(i-a)/l:i===u?t=2+(a-n)/l:a===u&&(t=4+(n-i)/l),(t=Math.min(60*t,360))<0&&(t+=360),r=(o+u)/2,[t,100*(u===o?0:r<=.5?l/(u+o):l/(2-u-o)),100*r]},o.rgb.hsv=function(e){var t,r,n,i,a,o=e[0]/255,u=e[1]/255,l=e[2]/255,c=Math.max(o,u,l),s=c-Math.min(o,u,l),h=function(e){return(c-e)/6/s+.5};return 0===s?i=a=0:(a=s/c,t=h(o),r=h(u),n=h(l),o===c?i=n-r:u===c?i=1/3+t-n:l===c&&(i=2/3+r-t),i<0?i+=1:i>1&&(i-=1)),[360*i,100*a,100*c]},o.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2];return[o.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(r,n))),100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},o.rgb.cmyk=function(e){var t,r=e[0]/255,n=e[1]/255,i=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-i)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-i-t)/(1-t)||0),100*t]},o.rgb.keyword=function(e){var t=i[e];if(t)return t;var r,a,o,u=1/0;for(var l in n)if(n.hasOwnProperty(l)){var c=n[l],s=(a=e,o=c,Math.pow(a[0]-o[0],2)+Math.pow(a[1]-o[1],2)+Math.pow(a[2]-o[2],2));s<u&&(u=s,r=l)}return r},o.keyword.rgb=function(e){return n[e]},o.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},o.rgb.lab=function(e){var t=o.rgb.xyz(e),r=t[0],n=t[1],i=t[2];return n/=100,i/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},o.hsl.rgb=function(e){var t,r,n,i,a,o=e[0]/360,u=e[1]/100,l=e[2]/100;if(0===u)return[a=255*l,a,a];t=2*l-(r=l<.5?l*(1+u):l+u-l*u),i=[0,0,0];for(var c=0;c<3;c++)(n=o+1/3*-(c-1))<0&&n++,n>1&&n--,a=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,i[c]=255*a;return i},o.hsl.hsv=function(e){var t=e[0],r=e[1]/100,n=e[2]/100,i=r,a=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,i*=a<=1?a:2-a,[t,100*(0===n?2*i/(a+i):2*r/(n+r)),100*((n+r)/2)]},o.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,i=Math.floor(t)%6,a=t-Math.floor(t),o=255*n*(1-r),u=255*n*(1-r*a),l=255*n*(1-r*(1-a));switch(n*=255,i){case 0:return[n,l,o];case 1:return[u,n,o];case 2:return[o,n,l];case 3:return[o,u,n];case 4:return[l,o,n];case 5:return[n,o,u]}},o.hsv.hsl=function(e){var t,r,n,i=e[0],a=e[1]/100,o=e[2]/100,u=Math.max(o,.01);return n=(2-a)*o,r=a*u,[i,100*(r=(r/=(t=(2-a)*u)<=1?t:2-t)||0),100*(n/=2)]},o.hwb.rgb=function(e){var t,r,n,i,a,o,u,l=e[0]/360,c=e[1]/100,s=e[2]/100,h=c+s;switch(h>1&&(c/=h,s/=h),n=6*l-(t=Math.floor(6*l)),0!=(1&t)&&(n=1-n),i=c+n*((r=1-s)-c),t){default:case 6:case 0:a=r,o=i,u=c;break;case 1:a=i,o=r,u=c;break;case 2:a=c,o=r,u=i;break;case 3:a=c,o=i,u=r;break;case 4:a=i,o=c,u=r;break;case 5:a=r,o=c,u=i}return[255*a,255*o,255*u]},o.cmyk.rgb=function(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,i=e[3]/100;return[255*(1-Math.min(1,t*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i))]},o.xyz.rgb=function(e){var t,r,n,i=e[0]/100,a=e[1]/100,o=e[2]/100;return r=-.9689*i+1.8758*a+.0415*o,n=.0557*i+-.204*a+1.057*o,t=(t=3.2406*i+-1.5372*a+-.4986*o)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},o.xyz.lab=function(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},o.lab.xyz=function(e){var t,r,n,i=e[0];t=e[1]/500+(r=(i+16)/116),n=r-e[2]/200;var a=Math.pow(r,3),o=Math.pow(t,3),u=Math.pow(n,3);return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,[t*=95.047,r*=100,n*=108.883]},o.lab.lch=function(e){var t,r=e[0],n=e[1],i=e[2];return(t=360*Math.atan2(i,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+i*i),t]},o.lch.lab=function(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]},o.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],i=1 in arguments?arguments[1]:o.rgb.hsv(e)[2];if(0===(i=Math.round(i/50)))return 30;var a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===i&&(a+=60),a},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},o.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},o.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},o.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map((function(e){return e+e})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},o.rgb.hcg=function(e){var t,r=e[0]/255,n=e[1]/255,i=e[2]/255,a=Math.max(Math.max(r,n),i),o=Math.min(Math.min(r,n),i),u=a-o;return t=u<=0?0:a===r?(n-i)/u%6:a===n?2+(i-r)/u:4+(r-n)/u+4,t/=6,[360*(t%=1),100*u,100*(u<1?o/(1-u):0)]},o.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,i=0;return(n=r<.5?2*t*r:2*t*(1-r))<1&&(i=(r-.5*n)/(1-n)),[e[0],100*n,100*i]},o.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,i=0;return n<1&&(i=(r-n)/(1-n)),[e[0],100*n,100*i]},o.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var i,a=[0,0,0],o=t%1*6,u=o%1,l=1-u;switch(Math.floor(o)){case 0:a[0]=1,a[1]=u,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=u;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=u,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return i=(1-r)*n,[255*(r*a[0]+i),255*(r*a[1]+i),255*(r*a[2]+i)]},o.hcg.hsv=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},o.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},o.hcg.hwb=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},o.hwb.hcg=function(e){var t=e[1]/100,r=1-e[2]/100,n=r-t,i=0;return n<1&&(i=(r-n)/(1-n)),[e[0],100*n,100*i]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=o.gray.hsv=function(e){return[0,0,e[0]]},o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},tiwY:function(e,t,r){"use strict";var n=r("8OQS"),i=r("PJYZ"),a=r("VbXa"),o=r("TqRt"),u=r("284h");t.__esModule=!0,t.default=void 0;var l=o(r("pVnL")),c=u(r("q1tI")),s=u(r("plVc")),h=o(r("z/o8")),f="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Cover.js",d=function(e){function t(t){var r;return(r=e.call(this,t)||this).getCoverEl=function(){return document.querySelector(".tl-cover-el")},r.horizontal=function(e){var t=e.node,n=e.props.length,i=e.direction,a="left"===i?"-100%":"100%",o="left"===i?"100%":"-100%",u=n/6,l=(n-u)/2,c=r.getCoverEl();return h.default.timeline().set(c,{y:0,x:o,display:"block"}).to(c,{x:"0%",ease:"power1.easeInOut",duration:l}).set(t,{opacity:0}).to(c,{x:a,ease:"power1.easeInOut",duration:l},"+="+u)},r.vertical=function(e){var t=e.node,n=e.props.length,i=e.direction,a="up"===i?"-100%":"100%",o="up"===i?"100%":"-100%",u=n/6,l=(n-u)/2,c=r.getCoverEl();return h.default.timeline().set(c,{y:o}).to(c,{y:"0%",ease:"power1.easeInOut",duration:l}).set(t,{opacity:0}).to(c,{y:a,ease:"power1.easeIn",duration:l},"+="+u)},r.moveInDirection=function(e){var t=e.props,n=e.direction,i=e.node;return"left"===n||"right"===n?r.horizontal({props:t,direction:n,node:i}):r.vertical({props:t,direction:n,node:i})},r.horizontal=r.horizontal.bind(i(r)),r.vertical=r.vertical.bind(i(r)),r}return a(t,e),t.prototype.render=function(){var e=this,t=this.props.direction||"left",r=this.props.duration||1,i=this.props,a=(i.exit,i.entry,i.cover,n(i,["exit","entry","cover"]));return c.default.createElement(c.default.Fragment,null,c.default.createElement(s.default,(0,l.default)({exit:{length:r,trigger:function(r){var n=r.exit,i=r.node;return e.moveInDirection({props:n,node:i,direction:t})}},entry:{delay:r/2}},a,{__self:this,__source:{fileName:f,lineNumber:92,columnNumber:5}}),this.props.children),c.default.createElement(s.TransitionPortal,{__self:this,__source:{fileName:f,lineNumber:110,columnNumber:5}},c.default.createElement("div",{className:"tl-cover-el",style:{position:"fixed",background:this.props.bg||"#4b2571",top:0,left:0,right:0,zIndex:1e3,width:"100vw",height:"100vh",transform:"translateY(100%)"},__self:this,__source:{fileName:f,lineNumber:111,columnNumber:6}})))},t}(c.Component);t.default=d},uxXc:function(e,t,r){var n=r("t1N5"),i=r("onlc"),a={};Object.keys(n).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});var t=i(e);Object.keys(t).forEach((function(r){var n=t[r];a[e][r]=function(e){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"==typeof r)for(var n=r.length,i=0;i<n;i++)r[i]=Math.round(r[i]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=a},yXPU:function(e,t){function r(e,t,r,n,i,a,o){try{var u=e[a](o),l=u.value}catch(c){return void r(c)}u.done?t(l):Promise.resolve(l).then(n,i)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function u(e){r(o,i,a,u,l,"next",e)}function l(e){r(o,i,a,u,l,"throw",e)}u(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},"z/o8":function(e,t,r){"use strict";r.r(t),r.d(t,"gsap",(function(){return a})),r.d(t,"default",(function(){return a})),r.d(t,"TweenMax",(function(){return o}));var n=r("pc+1");r.d(t,"TweenLite",(function(){return n.w})),r.d(t,"TimelineMax",(function(){return n.v})),r.d(t,"TimelineLite",(function(){return n.u})),r.d(t,"Power0",(function(){return n.i})),r.d(t,"Power1",(function(){return n.j})),r.d(t,"Power2",(function(){return n.k})),r.d(t,"Power3",(function(){return n.l})),r.d(t,"Power4",(function(){return n.m})),r.d(t,"Linear",(function(){return n.h})),r.d(t,"Quad",(function(){return n.o})),r.d(t,"Cubic",(function(){return n.d})),r.d(t,"Quart",(function(){return n.p})),r.d(t,"Quint",(function(){return n.q})),r.d(t,"Strong",(function(){return n.t})),r.d(t,"Elastic",(function(){return n.e})),r.d(t,"Back",(function(){return n.a})),r.d(t,"SteppedEase",(function(){return n.s})),r.d(t,"Bounce",(function(){return n.b})),r.d(t,"Sine",(function(){return n.r})),r.d(t,"Expo",(function(){return n.f})),r.d(t,"Circ",(function(){return n.c}));var i=r("nOaX");r.d(t,"CSSPlugin",(function(){return i.a}));var a=n.S.registerPlugin(i.a)||n.S,o=a.core.Tween}}]);
//# sourceMappingURL=11bd94dee3d2c959e7b18d08a61c4046e9db9a91-acbaec600cc465252d0b.js.map