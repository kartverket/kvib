import{L as Te}from"./index-DXXQsaeK.js";var Ee=function(a){if(typeof document>"u")return null;var e=Array.isArray(a)?a[0]:a;return e.ownerDocument.body},I=new WeakMap,j=new WeakMap,W={},z=0,ve=function(a){return a&&(a.host||ve(a.parentNode))},Fe=function(a,e){return e.map(function(t){if(a.contains(t))return t;var r=ve(t);return r&&a.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",a,". Doing nothing"),null)}).filter(function(t){return!!t})},Se=function(a,e,t,r){var u=Fe(e,Array.isArray(a)?a:[a]);W[t]||(W[t]=new WeakMap);var s=W[t],n=[],f=new Set,d=new Set(u),p=function(l){!l||f.has(l)||(f.add(l),p(l.parentNode))};u.forEach(p);var N=function(l){!l||d.has(l)||Array.prototype.forEach.call(l.children,function(v){if(f.has(v))N(v);else try{var F=v.getAttribute(r),w=F!==null&&F!=="false",k=(I.get(v)||0)+1,P=(s.get(v)||0)+1;I.set(v,k),s.set(v,P),n.push(v),k===1&&w&&j.set(v,!0),P===1&&v.setAttribute(t,"true"),w||v.setAttribute(r,"true")}catch(S){console.error("aria-hidden: cannot operate on ",v,S)}})};return N(e),f.clear(),z++,function(){n.forEach(function(l){var v=I.get(l)-1,F=s.get(l)-1;I.set(l,v),s.set(l,F),v||(j.has(l)||l.removeAttribute(r),j.delete(l)),F||l.removeAttribute(t)}),z--,z||(I=new WeakMap,I=new WeakMap,j=new WeakMap,W={})}},Ae=function(a,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(a)?a:[a]),u=Ee(a);return u?(r.push.apply(r,Array.from(u.querySelectorAll("[aria-live]"))),Se(r,u,t,"aria-hidden")):function(){return null}},ke=a=>{const e=requestAnimationFrame(()=>a());return()=>cancelAnimationFrame(e)};function rt(a,e={}){const{defer:t=!0}=e,r=t?ke:s=>s(),u=[];return u.push(r(()=>{const n=(typeof a=="function"?a():a).filter(Boolean);n.length!==0&&u.push(Ae(n))})),()=>{u.forEach(s=>s==null?void 0:s())}}var H="data-scroll-lock";function oe(a,e){if(!a)return;const t=Object.keys(e).reduce((r,u)=>(r[u]=a.style.getPropertyValue(u),r),{});return Object.assign(a.style,e),()=>{Object.assign(a.style,t)}}function Pe(a,e,t){if(!a)return;const r=a.style.getPropertyValue(e);return a.style.setProperty(e,t),()=>{r?a.style.setProperty(e,r):a.style.removeProperty(e)}}function Re(a){const e=a.getBoundingClientRect().left;return Math.round(e)+a.scrollLeft?"paddingLeft":"paddingRight"}function at(a){const e=a??document,t=e.defaultView??window,{documentElement:r,body:u}=e;if(u.hasAttribute(H))return;u.setAttribute(H,"");const n=t.innerWidth-r.clientWidth,f=()=>Pe(r,"--scrollbar-width",`${n}px`),d=Re(r),p=()=>oe(u,{overflow:"hidden",[d]:`${n}px`}),N=()=>{const{scrollX:v,scrollY:F,visualViewport:w}=t,k=(w==null?void 0:w.offsetLeft)??0,P=(w==null?void 0:w.offsetTop)??0,S=oe(u,{position:"fixed",overflow:"hidden",top:`${-(F-Math.floor(P))}px`,left:`${-(v-Math.floor(k))}px`,right:"0",[d]:`${n}px`});return()=>{S==null||S(),t.scrollTo({left:v,top:F,behavior:"instant"})}},l=[f(),Te()?N():p()];return()=>{l.forEach(v=>v==null?void 0:v()),u.removeAttribute(H)}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var be=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],G=be.join(","),he=typeof Element>"u",C=he?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,U=!he&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a==null?void 0:a.ownerDocument},V=function a(e,t){var r;t===void 0&&(t=!0);var u=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),s=u===""||u==="true",n=s||t&&e&&a(e.parentNode);return n},De=function(e){var t,r=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return r===""||r==="true"},pe=function(e,t,r){if(V(e))return[];var u=Array.prototype.slice.apply(e.querySelectorAll(G));return t&&C.call(e,G)&&u.unshift(e),u=u.filter(r),u},ye=function a(e,t,r){for(var u=[],s=Array.from(e);s.length;){var n=s.shift();if(!V(n,!1))if(n.tagName==="SLOT"){var f=n.assignedElements(),d=f.length?f:n.children,p=a(d,!0,r);r.flatten?u.push.apply(u,p):u.push({scopeParent:n,candidates:p})}else{var N=C.call(n,G);N&&r.filter(n)&&(t||!e.includes(n))&&u.push(n);var l=n.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(n),v=!V(l,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(n));if(l&&v){var F=a(l===!0?n.children:l.children,!0,r);r.flatten?u.push.apply(u,F):u.push({scopeParent:n,candidates:F})}else s.unshift.apply(s,n.children)}}return u},ge=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},D=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||De(e))&&!ge(e)?0:e.tabIndex},Ce=function(e,t){var r=D(e);return r<0&&t&&!ge(e)?0:r},Ie=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},me=function(e){return e.tagName==="INPUT"},Oe=function(e){return me(e)&&e.type==="hidden"},xe=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return t},Le=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]},Be=function(e){if(!e.name)return!0;var t=e.form||U(e),r=function(f){return t.querySelectorAll('input[type="radio"][name="'+f+'"]')},u;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")u=r(window.CSS.escape(e.name));else try{u=r(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var s=Le(u,e.form);return!s||s===e},Ke=function(e){return me(e)&&e.type==="radio"},Me=function(e){return Ke(e)&&!Be(e)},je=function(e){var t,r=e&&U(e),u=(t=r)===null||t===void 0?void 0:t.host,s=!1;if(r&&r!==e){var n,f,d;for(s=!!((n=u)!==null&&n!==void 0&&(f=n.ownerDocument)!==null&&f!==void 0&&f.contains(u)||e!=null&&(d=e.ownerDocument)!==null&&d!==void 0&&d.contains(e));!s&&u;){var p,N,l;r=U(u),u=(p=r)===null||p===void 0?void 0:p.host,s=!!((N=u)!==null&&N!==void 0&&(l=N.ownerDocument)!==null&&l!==void 0&&l.contains(u))}}return s},ue=function(e){var t=e.getBoundingClientRect(),r=t.width,u=t.height;return r===0&&u===0},We=function(e,t){var r=t.displayCheck,u=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=C.call(e,"details>summary:first-of-type"),n=s?e.parentElement:e;if(C.call(n,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof u=="function"){for(var f=e;e;){var d=e.parentElement,p=U(e);if(d&&!d.shadowRoot&&u(d)===!0)return ue(e);e.assignedSlot?e=e.assignedSlot:!d&&p!==e.ownerDocument?e=p.host:e=d}e=f}if(je(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return ue(e);return!1},qe=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var r=0;r<t.children.length;r++){var u=t.children.item(r);if(u.tagName==="LEGEND")return C.call(t,"fieldset[disabled] *")?!0:!u.contains(e)}return!0}t=t.parentElement}return!1},$=function(e,t){return!(t.disabled||V(t)||Oe(t)||We(t,e)||xe(t)||qe(t))},Q=function(e,t){return!(Me(t)||D(t)<0||!$(e,t))},Ge=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ue=function a(e){var t=[],r=[];return e.forEach(function(u,s){var n=!!u.scopeParent,f=n?u.scopeParent:u,d=Ce(f,n),p=n?a(u.candidates):f;d===0?n?t.push.apply(t,p):t.push(f):r.push({documentOrder:s,tabIndex:d,item:u,isScope:n,content:p})}),r.sort(Ie).reduce(function(u,s){return s.isScope?u.push.apply(u,s.content):u.push(s.content),u},[]).concat(t)},Ve=function(e,t){t=t||{};var r;return t.getShadowRoot?r=ye([e],t.includeContainer,{filter:Q.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ge}):r=pe(e,t.includeContainer,Q.bind(null,t)),Ue(r)},$e=function(e,t){t=t||{};var r;return t.getShadowRoot?r=ye([e],t.includeContainer,{filter:$.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):r=pe(e,t.includeContainer,$.bind(null,t)),r},O=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return C.call(e,G)===!1?!1:Q(t,e)},Xe=be.concat("iframe").join(","),J=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return C.call(e,Xe)===!1?!1:$(t,e)};/*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Ye(a,e,t){return(e=ze(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function se(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),t.push.apply(t,r)}return t}function ce(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?se(Object(t),!0).forEach(function(r){Ye(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function Ze(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function ze(a){var e=Ze(a,"string");return typeof e=="symbol"?e:e+""}var le={activateTrap:function(e,t){if(e.length>0){var r=e[e.length-1];r!==t&&r.pause()}var u=e.indexOf(t);u===-1||e.splice(u,1),e.push(t)},deactivateTrap:function(e,t){var r=e.indexOf(t);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}},He=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Je=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},M=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},Qe=function(e){return M(e)&&!e.shiftKey},_e=function(e){return M(e)&&e.shiftKey},fe=function(e){return setTimeout(e,0)},de=function(e,t){var r=-1;return e.every(function(u,s){return t(u)?(r=s,!1):!0}),r},K=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return typeof e=="function"?e.apply(void 0,r):e},q=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},et=[],nt=function(e,t){var r=(t==null?void 0:t.document)||document,u=(t==null?void 0:t.trapStack)||et,s=ce({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Qe,isKeyBackward:_e},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},f,d=function(i,o,c){return i&&i[o]!==void 0?i[o]:s[c||o]},p=function(i,o){var c=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return n.containerGroups.findIndex(function(b){var h=b.container,g=b.tabbableNodes;return h.contains(i)||(c==null?void 0:c.includes(h))||g.find(function(m){return m===i})})},N=function(i){var o=s[i];if(typeof o=="function"){for(var c=arguments.length,b=new Array(c>1?c-1:0),h=1;h<c;h++)b[h-1]=arguments[h];o=o.apply(void 0,b)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var g=o;if(typeof o=="string"&&(g=r.querySelector(o),!g))throw new Error("`".concat(i,"` as selector refers to no known node"));return g},l=function(){var i=N("initialFocus");if(i===!1)return!1;if(i===void 0||!J(i,s.tabbableOptions))if(p(r.activeElement)>=0)i=r.activeElement;else{var o=n.tabbableGroups[0],c=o&&o.firstTabbableNode;i=c||N("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},v=function(){if(n.containerGroups=n.containers.map(function(i){var o=Ve(i,s.tabbableOptions),c=$e(i,s.tabbableOptions),b=o.length>0?o[0]:void 0,h=o.length>0?o[o.length-1]:void 0,g=c.find(function(T){return O(T)}),m=c.slice().reverse().find(function(T){return O(T)}),E=!!o.find(function(T){return D(T)>0});return{container:i,tabbableNodes:o,focusableNodes:c,posTabIndexesFound:E,firstTabbableNode:b,lastTabbableNode:h,firstDomTabbableNode:g,lastDomTabbableNode:m,nextTabbableNode:function(R){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,A=o.indexOf(R);return A<0?L?c.slice(c.indexOf(R)+1).find(function(B){return O(B)}):c.slice(0,c.indexOf(R)).reverse().find(function(B){return O(B)}):o[A+(L?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!N("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(i){return i.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},F=function(i){var o=i.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?F(o.shadowRoot):o},w=function(i){if(i!==!1&&i!==F(document)){if(!i||!i.focus){w(l());return}i.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=i,He(i)&&i.select()}},k=function(i){var o=N("setReturnFocus",i);return o||(o===!1?!1:i)},P=function(i){var o=i.target,c=i.event,b=i.isBackward,h=b===void 0?!1:b;o=o||q(c),v();var g=null;if(n.tabbableGroups.length>0){var m=p(o,c),E=m>=0?n.containerGroups[m]:void 0;if(m<0)h?g=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:g=n.tabbableGroups[0].firstTabbableNode;else if(h){var T=de(n.tabbableGroups,function(Y){var Z=Y.firstTabbableNode;return o===Z});if(T<0&&(E.container===o||J(o,s.tabbableOptions)&&!O(o,s.tabbableOptions)&&!E.nextTabbableNode(o,!1))&&(T=m),T>=0){var R=T===0?n.tabbableGroups.length-1:T-1,L=n.tabbableGroups[R];g=D(o)>=0?L.lastTabbableNode:L.lastDomTabbableNode}else M(c)||(g=E.nextTabbableNode(o,!1))}else{var A=de(n.tabbableGroups,function(Y){var Z=Y.lastTabbableNode;return o===Z});if(A<0&&(E.container===o||J(o,s.tabbableOptions)&&!O(o,s.tabbableOptions)&&!E.nextTabbableNode(o))&&(A=m),A>=0){var B=A===n.tabbableGroups.length-1?0:A+1,ie=n.tabbableGroups[B];g=D(o)>=0?ie.firstTabbableNode:ie.firstDomTabbableNode}else M(c)||(g=E.nextTabbableNode(o))}}else g=N("fallbackFocus");return g},S=function(i){var o=q(i);if(!(p(o,i)>=0)){if(K(s.clickOutsideDeactivates,i)){f.deactivate({returnFocus:s.returnFocusOnDeactivate});return}K(s.allowOutsideClick,i)||i.preventDefault()}},_=function(i){var o=q(i),c=p(o,i)>=0;if(c||o instanceof Document)c&&(n.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var b,h=!0;if(n.mostRecentlyFocusedNode)if(D(n.mostRecentlyFocusedNode)>0){var g=p(n.mostRecentlyFocusedNode),m=n.containerGroups[g].tabbableNodes;if(m.length>0){var E=m.findIndex(function(T){return T===n.mostRecentlyFocusedNode});E>=0&&(s.isKeyForward(n.recentNavEvent)?E+1<m.length&&(b=m[E+1],h=!1):E-1>=0&&(b=m[E-1],h=!1))}}else n.containerGroups.some(function(T){return T.tabbableNodes.some(function(R){return D(R)>0})})||(h=!1);else h=!1;h&&(b=P({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),w(b||n.mostRecentlyFocusedNode||l())}n.recentNavEvent=void 0},we=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=i;var c=P({event:i,isBackward:o});c&&(M(i)&&i.preventDefault(),w(c))},ee=function(i){(s.isKeyForward(i)||s.isKeyBackward(i))&&we(i,s.isKeyBackward(i))},te=function(i){Je(i)&&K(s.escapeDeactivates,i)!==!1&&(i.preventDefault(),f.deactivate())},re=function(i){var o=q(i);p(o,i)>=0||K(s.clickOutsideDeactivates,i)||K(s.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},ae=function(){if(n.active)return le.activateTrap(u,f),n.delayInitialFocusTimer=s.delayInitialFocus?fe(function(){w(l())}):w(l()),r.addEventListener("focusin",_,!0),r.addEventListener("mousedown",S,{capture:!0,passive:!1}),r.addEventListener("touchstart",S,{capture:!0,passive:!1}),r.addEventListener("click",re,{capture:!0,passive:!1}),r.addEventListener("keydown",ee,{capture:!0,passive:!1}),r.addEventListener("keydown",te),f},ne=function(){if(n.active)return r.removeEventListener("focusin",_,!0),r.removeEventListener("mousedown",S,!0),r.removeEventListener("touchstart",S,!0),r.removeEventListener("click",re,!0),r.removeEventListener("keydown",ee,!0),r.removeEventListener("keydown",te),f},Ne=function(i){var o=i.some(function(c){var b=Array.from(c.removedNodes);return b.some(function(h){return h===n.mostRecentlyFocusedNode})});o&&w(l())},X=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Ne):void 0,x=function(){X&&(X.disconnect(),n.active&&!n.paused&&n.containers.map(function(i){X.observe(i,{subtree:!0,childList:!0})}))};return f={get active(){return n.active},get paused(){return n.paused},activate:function(i){if(n.active)return this;var o=d(i,"onActivate"),c=d(i,"onPostActivate"),b=d(i,"checkCanFocusTrap");b||v(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=r.activeElement,o==null||o();var h=function(){b&&v(),ae(),x(),c==null||c()};return b?(b(n.containers.concat()).then(h,h),this):(h(),this)},deactivate:function(i){if(!n.active)return this;var o=ce({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},i);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,ne(),n.active=!1,n.paused=!1,x(),le.deactivateTrap(u,f);var c=d(o,"onDeactivate"),b=d(o,"onPostDeactivate"),h=d(o,"checkCanReturnFocus"),g=d(o,"returnFocus","returnFocusOnDeactivate");c==null||c();var m=function(){fe(function(){g&&w(k(n.nodeFocusedBeforeActivation)),b==null||b()})};return g&&h?(h(k(n.nodeFocusedBeforeActivation)).then(m,m),this):(m(),this)},pause:function(i){if(n.paused||!n.active)return this;var o=d(i,"onPause"),c=d(i,"onPostPause");return n.paused=!0,o==null||o(),ne(),x(),c==null||c(),this},unpause:function(i){if(!n.paused||!n.active)return this;var o=d(i,"onUnpause"),c=d(i,"onPostUnpause");return n.paused=!1,o==null||o(),v(),ae(),x(),c==null||c(),this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return n.containers=o.map(function(c){return typeof c=="string"?r.querySelector(c):c}),n.active&&v(),x(),this}},f.updateContainerElements(e),f};export{rt as a,nt as c,at as p};
