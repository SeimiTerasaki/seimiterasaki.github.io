(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Alic:function(e,t,n){"use strict";t.__esModule=!0,t.useTransitionState=void 0;var i=n("q1tI"),r=n("Ds8n");t.useTransitionState=function(){return(0,i.useContext)(r.publicContext)}},Fstm:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.triggerTransition=void 0;var r=n("Wbzz"),a=n("NAVQ"),o=n("c3/e"),s=i(n("I3R8"));t.triggerTransition=function(e){var t,n=e.to,i=e.event,l=void 0===i?null:i,u=e.exit,c=void 0===u?{}:u,d=e.entry,f=void 0===d?{}:d,v=e.inTransition,p=e.pages,m=e.trigger,g=e.updateContext,y=e.linkState,_=e.replace,b=e.preventScrollJump;if(l&&(l.persist(),l.preventDefault()),v)return!1;if(n.includes("#")){var T=n.split("#");n=T[0],t=T[1]}window.__tl_inTransition=!0,window.__tl_desiredPathname=(0,r.withPrefix)(n),g({inTransition:!0,exitDelay:0,exitLength:0,appearAfter:0,exitState:{}}),m&&"function"==typeof m&&m(p);var h=c.length,x=void 0===h?0:h,w=c.delay,N=void 0===w?0:w,S=c.state,E=void 0===S?{}:S,R=c.trigger,k=void 0===R?function(){}:R,C=f.length,D=void 0===C?1:C,M=f.delay,A=void 0===M?0:M,q=f.state,I=void 0===q?{}:q,L=f.trigger,O=void 0===L?function(){}:L,P=f.appearAfter;g({entryLength:D,entryDelay:A,exitLength:x,exitDelay:N,entryProps:f,exitProps:c,appearAfter:void 0===P?0:P,preventScrollJump:b,exitTrigger:function(e,t,n){return k(e,t,n)},entryTrigger:function(e,t,n){return O(e,t,n)},e:l}),(0,a.setTimeout)((function(){(0,r.navigate)(n,{state:Object.assign({},y),replace:_}),g({exitState:E,hash:t})}),(0,o.getMs)(N)),(0,a.setTimeout)((function(){g({entryState:I})}),(0,o.getMs)(N+A)),(0,a.setTimeout)((function(){return g({entryDelay:0,appearAfter:0,entryLength:0})}),(0,o.getMs)(N+A+D));var V=N+Math.max(x,A+D);(0,a.setTimeout)((function(){window.__tl_inTransition=!1,window.__tl_desiredPathname=!1,window.__tl_back_button_pressed=!1,g(Object.assign({exitDelay:0,exitLength:0,inTransition:!1},(0,s.default)()))}),(0,o.getMs)(V)+1)}},GVzS:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=n("q1tI"),r=n("Ds8n");var a=function(e){var t=(0,i.useRef)(null),n=(0,i.useContext)(r.publicContext),a=(0,i.useState)(null),o=a[0],s=a[1],l=(0,i.useState)(!1),u=l[0],c=l[1],d="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;return(0,i.useEffect)((function(){if(t&&t.current){var e;return(e=new IntersectionObserver((function(e){var t=e[0];c(!!t.intersectionRatio)}),{threshold:1})).observe(t.current),function(){return e.unobserve(t.current)}}}),[t]),(0,i.useEffect)((function(){(!d||e.forceRender||u)&&s(n)}),[n.transitionStatus,t,u]),e.children(o,t)};t.default=a},"N+e4":function(e,t,n){"use strict";var i=n("VbXa"),r=n("284h"),a=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),s=a(n("i8i4")),l="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionPortal.js",u="undefined"!=typeof document&&document.body,c=function(e){var t=function(e){switch(e){case"bottom":return 1e3;case"top":return 1200;default:return 1100}}(e.level);return o.default.createElement("div",{className:"gatsby-plugin-transition-link-portal",style:{position:"fixed",top:0,left:0,zIndex:t},__self:void 0,__source:{fileName:l,lineNumber:19,columnNumber:3}},e.children)},d=function(e){function t(){var t;return(t=e.call(this)||this).componentDidMount=function(){u&&u.appendChild(t.el)},t.componentWillUnmount=function(){u&&u.removeChild(t.el)},t.el="undefined"!=typeof document&&document.createElement("section"),t}return i(t,e),t.prototype.render=function(){return this.el&&u?s.default.createPortal(o.default.createElement(o.default.Fragment,null,u&&o.default.createElement(c,{styles:this.props.css,level:this.props.level,__self:this,__source:{fileName:l,lineNumber:54,columnNumber:8}},this.props.children)),this.el):null},t}(o.Component);t.default=d},V17b:function(e,t,n){"use strict";var i=n("8OQS"),r=n("TqRt"),a=n("284h");t.__esModule=!0,t.TransitionLink=void 0;var o=r(n("pVnL")),s=a(n("q1tI")),l=r(n("17x9")),u=n("Wbzz"),c=n("X6jR"),d=n("Fstm"),f=n("Ds8n"),v="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionLink.js";void 0===s.forwardRef&&(s.forwardRef=function(){throw new Error('"forwardRef" is read-only.')}());var p=(0,s.forwardRef)((function(e,t){var n=e.to,r=e.children,a=e.exit,l=e.entry,p=e.activeStyle,m=e.partiallyActive,g=e.style,y=e.className,_=e.activeClassName,b=e.state,T=e.onClick,h=e.trigger,x=e.replace,w=e.innerRef,N=e.preventScrollJump,S=i(e,["to","children","exit","entry","activeStyle","partiallyActive","style","className","activeClassName","state","onClick","trigger","replace","innerRef","preventScrollJump"]);return s.default.createElement(f.Consumer,{__self:void 0,__source:{fileName:v,lineNumber:36,columnNumber:4}},(function(e){var f=e.disableAnimation,E=i(e,["disableAnimation"]);return s.default.createElement(u.Link,(0,o.default)({style:g,activeStyle:p,className:y,activeClassName:_,partiallyActive:m,onClick:function(e){if(!f){var t=(0,c.shouldNavigate)(e);t&&(0,d.triggerTransition)(Object.assign({event:e,to:n,exit:a,entry:l,trigger:h,replace:x,preventScrollJump:N,linkState:b},E)),"function"==typeof T&&T(e,t)}},to:n,ref:t||w},S,{__self:void 0,__source:{fileName:v,lineNumber:38,columnNumber:6}}),r)}))}));t.TransitionLink=p,p.propTypes={to:l.default.string.isRequired,exitLength:l.default.number,entryDelay:l.default.number,exitFn:l.default.func,entryState:l.default.object}},V2YU:function(e,t,n){"use strict";t.__esModule=!0,t.useTriggerTransition=void 0;var i=n("q1tI"),r=n("Wbzz"),a=n("Ds8n"),o=n("Fstm");t.useTriggerTransition=function(e){var t=(0,i.useContext)(a.Context);return function(n){(n instanceof Event||n.nativeEvent&&n.nativeEvent instanceof Event)&&(n={event:n});var i=Object.assign({},e,n);t.disableAnimation?(i.event&&(i.event.persist(),i.event.preventDefault()),(0,r.navigate)(i.to)):(0,o.triggerTransition)(Object.assign({},t,i))}}},X6jR:function(e,t,n){"use strict";t.__esModule=!0,t.shouldNavigate=void 0;t.shouldNavigate=function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}},plVc:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var r=n("V17b"),a=i(n("7Y3J"));t.TransitionHandler=a.default;var o=n("Ds8n");t.TransitionState=o.PublicConsumer;var s=i(n("N+e4"));t.TransitionPortal=s.default;var l=i(n("GVzS"));t.TransitionObserver=l.default;var u=n("qF42");t.useTriggerTransition=u.useTriggerTransition;var c=r.TransitionLink;t.default=c},qF42:function(e,t,n){"use strict";t.__esModule=!0,t.useTriggerTransition=t.useTransitionState=void 0;var i=n("Alic");t.useTransitionState=i.useTransitionState;var r=n("V2YU");t.useTriggerTransition=r.useTriggerTransition},w2l6:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("pc+1"),o=n("plVc"),s=n.n(o);t.default=function(){return r.a.createElement("div",{className:"max-w-4xl flex-grow mx-auto flex flex-col mt-40 item-center"},r.a.createElement("p",{className:"text-2xl"},"Page Not Found"),r.a.createElement("br",null),r.a.createElement(s.a,{to:"/",exit:{trigger:function(e){e.exit,e.node;(new a.v).to("max-w-4xl",.2,{y:"20px",opacity:0,autoAlpha:0,ease:a.h.easeIn})},length:1},entry:{delay:2}},r.a.createElement("p",null,"Return to Home")))}}}]);
//# sourceMappingURL=component---src-pages-404-js-bf16629fde49754c8ddd.js.map