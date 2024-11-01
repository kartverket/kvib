import{s as A,w as F,T as I,b as M,i as k,h as j,E as z,c as O}from"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import{r as y}from"./index-BwDkhjyp.js";var T={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=typeof Symbol=="function"&&Symbol.for,E=n?Symbol.for("react.element"):60103,C=n?Symbol.for("react.portal"):60106,m=n?Symbol.for("react.fragment"):60107,p=n?Symbol.for("react.strict_mode"):60108,d=n?Symbol.for("react.profiler"):60114,S=n?Symbol.for("react.provider"):60109,b=n?Symbol.for("react.context"):60110,w=n?Symbol.for("react.async_mode"):60111,v=n?Symbol.for("react.concurrent_mode"):60111,$=n?Symbol.for("react.forward_ref"):60112,g=n?Symbol.for("react.suspense"):60113,L=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,x=n?Symbol.for("react.lazy"):60116,q=n?Symbol.for("react.block"):60121,G=n?Symbol.for("react.fundamental"):60117,N=n?Symbol.for("react.responder"):60118,W=n?Symbol.for("react.scope"):60119;function a(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case E:switch(e=e.type,e){case w:case v:case m:case d:case p:case g:return e;default:switch(e=e&&e.$$typeof,e){case b:case $:case x:case h:case S:return e;default:return r}}case C:return r}}}function _(e){return a(e)===v}t.AsyncMode=w;t.ConcurrentMode=v;t.ContextConsumer=b;t.ContextProvider=S;t.Element=E;t.ForwardRef=$;t.Fragment=m;t.Lazy=x;t.Memo=h;t.Portal=C;t.Profiler=d;t.StrictMode=p;t.Suspense=g;t.isAsyncMode=function(e){return _(e)||a(e)===w};t.isConcurrentMode=_;t.isContextConsumer=function(e){return a(e)===b};t.isContextProvider=function(e){return a(e)===S};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===E};t.isForwardRef=function(e){return a(e)===$};t.isFragment=function(e){return a(e)===m};t.isLazy=function(e){return a(e)===x};t.isMemo=function(e){return a(e)===h};t.isPortal=function(e){return a(e)===C};t.isProfiler=function(e){return a(e)===d};t.isStrictMode=function(e){return a(e)===p};t.isSuspense=function(e){return a(e)===g};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===m||e===v||e===d||e===p||e===g||e===L||typeof e=="object"&&e!==null&&(e.$$typeof===x||e.$$typeof===h||e.$$typeof===S||e.$$typeof===b||e.$$typeof===$||e.$$typeof===G||e.$$typeof===N||e.$$typeof===W||e.$$typeof===q)};t.typeOf=a;T.exports=t;var D=T.exports,P=D,V={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[P.ForwardRef]=V;R[P.Memo]=Y;var K=function(r,s){var u=arguments;if(s==null||!j.call(s,"css"))return y.createElement.apply(void 0,u);var i=u.length,f=new Array(i);f[0]=z,f[1]=O(r,s);for(var o=2;o<i;o++)f[o]=u[o];return y.createElement.apply(null,f)},Q=F(function(e,r){var s=e.styles,u=A([s],void 0,y.useContext(I)),i=y.useRef();return M(function(){var f=r.key+"-global",o=new r.sheet.constructor({key:f,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),c=!1,l=document.querySelector('style[data-emotion="'+f+" "+u.name+'"]');return r.sheet.tags.length&&(o.before=r.sheet.tags[0]),l!==null&&(c=!0,l.setAttribute("data-emotion",f),o.hydrate([l])),i.current=[o,c],function(){o.flush()}},[r]),M(function(){var f=i.current,o=f[0],c=f[1];if(c){f[1]=!1;return}if(u.next!==void 0&&k(r,u.next,!0),o.tags.length){var l=o.tags[o.tags.length-1].nextElementSibling;o.before=l,o.flush()}r.insert("",u,o,!1)},[r,u.name]),null});function B(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return A(r)}var U=function(){var r=B.apply(void 0,arguments),s="animation-"+r.name;return{name:s,styles:"@keyframes "+s+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{Q as G,B as c,K as j,U as k};
