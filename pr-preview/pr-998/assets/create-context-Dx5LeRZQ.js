import{r as _}from"./index-Bj2TM2QZ.js";var $=t=>Math.max(0,Math.min(1,t)),dt=(t,e)=>t.map((n,r)=>t[(Math.max(e,0)+r)%t.length]),D=(...t)=>e=>t.reduce((n,r)=>r(n),e),E=()=>{},k=t=>typeof t=="object"&&t!==null,he=2147483647,ve=t=>t?"":void 0,Ee=t=>t?"true":void 0,mt=1,pt=9,bt=11,b=t=>k(t)&&t.nodeType===mt&&typeof t.nodeName=="string",Y=t=>k(t)&&t.nodeType===pt,yt=t=>k(t)&&t===t.window,G=t=>b(t)?t.localName||"":"#document";function gt(t){return["html","body","#document"].includes(G(t))}var ht=t=>k(t)&&t.nodeType!==void 0,A=t=>ht(t)&&t.nodeType===bt&&"host"in t,vt=t=>b(t)&&t.localName==="input",we=t=>!!(t!=null&&t.matches("a[href]")),Et=t=>b(t)?t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0:!1,wt=/(textarea|select)/;function Tt(t){if(t==null||!b(t))return!1;try{return vt(t)&&t.selectionStart!=null||wt.test(t.localName)||t.isContentEditable||t.getAttribute("contenteditable")==="true"||t.getAttribute("contenteditable")===""}catch{return!1}}function Z(t,e){var r;if(!t||!e||!b(t)||!b(e))return!1;const n=(r=e.getRootNode)==null?void 0:r.call(e);if(t===e||t.contains(e))return!0;if(n&&A(n)){let o=e;for(;o;){if(t===o)return!0;o=o.parentNode||o.host}}return!1}function R(t){return Y(t)?t:yt(t)?t.document:(t==null?void 0:t.ownerDocument)??document}function xt(t){return R(t).documentElement}function g(t){var e;return A(t)?g(t.host):Y(t)?t.defaultView??window:b(t)?((e=t.ownerDocument)==null?void 0:e.defaultView)??window:window}function Te(t){let e=t.activeElement;for(;e!=null&&e.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}function At(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||A(t)&&t.host||xt(t);return A(e)?e.host:e}var M=new WeakMap;function xe(t){return M.has(t)||M.set(t,g(t).getComputedStyle(t)),M.get(t)}var S=()=>typeof document<"u";function kt(){const t=navigator.userAgentData;return(t==null?void 0:t.platform)??navigator.platform}function St(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(({brand:e,version:n})=>`${e}/${n}`).join(" "):navigator.userAgent}var F=t=>S()&&t.test(kt()),J=t=>S()&&t.test(St()),Nt=t=>S()&&t.test(navigator.vendor),Ae=()=>S()&&!!navigator.maxTouchPoints,Pt=()=>F(/^iPhone/i),Lt=()=>F(/^iPad/i)||V()&&navigator.maxTouchPoints>1,O=()=>Pt()||Lt(),Q=()=>V()||O(),V=()=>F(/^Mac/i),ke=()=>Q()&&Nt(/apple/i),It=()=>J(/Firefox/i),Dt=()=>J(/Android/i);function Se(t){const{selectionStart:e,selectionEnd:n,value:r}=t.currentTarget;return r.slice(0,e)+t.data+r.slice(n)}function Mt(t){var e,n,r;return((e=t.composedPath)==null?void 0:e.call(t))??((r=(n=t.nativeEvent)==null?void 0:n.composedPath)==null?void 0:r.call(n))}function tt(t){const e=Mt(t);return(e==null?void 0:e[0])??t.target}var Ne=t=>Z(t.currentTarget,tt(t));function Pe(t){const e=t.currentTarget;if(!e)return!1;const n=Q();if(n&&!t.metaKey||!n&&!t.ctrlKey)return!1;const r=e.localName;return r==="a"||r==="button"&&e.type==="submit"||r==="input"&&e.type==="submit"}function Le(t){const e=t.currentTarget;if(!e)return!1;const n=e.localName;return t.altKey?n==="a"||n==="button"&&e.type==="submit"||n==="input"&&e.type==="submit":!1}function Ie(t){return Rt(t).isComposing||t.keyCode===229}function De(t){return t.key.length===1&&!t.ctrlKey&&!t.metaKey}function Me(t){return t.mozInputSource===0&&t.isTrusted?!0:Dt()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}var Ce=t=>t.button===0,Ke=t=>t.button===2||V()&&t.ctrlKey&&t.button===0,Re=t=>t.ctrlKey||t.altKey||t.metaKey,Ct=t=>"touches"in t&&t.touches.length>0,Kt={Up:"ArrowUp",Down:"ArrowDown",Esc:"Escape"," ":"Space",",":"Comma",Left:"ArrowLeft",Right:"ArrowRight"},z={ArrowLeft:"ArrowRight",ArrowRight:"ArrowLeft"};function Fe(t,e={}){const{dir:n="ltr",orientation:r="horizontal"}=e;let o=t.key;return o=Kt[o]??o,n==="rtl"&&r==="horizontal"&&o in z&&(o=z[o]),o}function Rt(t){return t.nativeEvent??t}var Ft=new Set(["PageUp","PageDown"]),Ot=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function Oe(t){return t.ctrlKey||t.metaKey?.1:Ft.has(t.key)||t.shiftKey&&Ot.has(t.key)?10:1}function et(t,e="client"){const n=Ct(t)?t.touches[0]||t.changedTouches[0]:t;return{x:n[`${e}X`],y:n[`${e}Y`]}}var p=(t,e,n,r)=>{const o=typeof t=="function"?t():t;return o==null||o.addEventListener(e,n,r),()=>{o==null||o.removeEventListener(e,n,r)}};function nt(t,e){const{type:n="HTMLInputElement",property:r="value"}=e,o=g(t)[n].prototype;return Object.getOwnPropertyDescriptor(o,r)??{}}function Vt(t){if(t.localName==="input")return"HTMLInputElement";if(t.localName==="textarea")return"HTMLTextAreaElement";if(t.localName==="select")return"HTMLSelectElement"}function Bt(t,e,n="value"){var o;if(!t)return;const r=Vt(t);r&&((o=nt(t,{type:r,property:n}).set)==null||o.call(t,e)),t.setAttribute(n,e)}function Ut(t,e){var r;if(!t)return;(r=nt(t,{type:"HTMLInputElement",property:"checked"}).set)==null||r.call(t,e),e?t.setAttribute("checked",""):t.removeAttribute("checked")}function Ve(t,e){const{value:n,bubbles:r=!0}=e;if(!t)return;const o=g(t);t instanceof o.HTMLInputElement&&(Bt(t,`${n}`),t.dispatchEvent(new o.Event("input",{bubbles:r})))}function Be(t,e){const{checked:n,bubbles:r=!0}=e;if(!t)return;const o=g(t);t instanceof o.HTMLInputElement&&(Ut(t,n),t.dispatchEvent(new o.Event("click",{bubbles:r})))}function jt(t){return Ht(t)?t.form:t.closest("form")}function Ht(t){return t.matches("textarea, input, select, button")}function qt(t,e){if(!t)return;const n=jt(t),r=o=>{o.defaultPrevented||e()};return n==null||n.addEventListener("reset",r,{passive:!0}),()=>n==null?void 0:n.removeEventListener("reset",r)}function Wt(t,e){const n=t==null?void 0:t.closest("fieldset");if(!n)return;e(n.disabled);const r=g(n),o=new r.MutationObserver(()=>e(n.disabled));return o.observe(n,{attributes:!0,attributeFilter:["disabled"]}),()=>o.disconnect()}function Ue(t,e){if(!t)return;const{onFieldsetDisabledChange:n,onFormReset:r}=e,o=[qt(t,r),Wt(t,n)];return()=>o.forEach(s=>s==null?void 0:s())}var rt=t=>b(t)&&t.tagName==="IFRAME",_t=t=>!Number.isNaN(parseInt(t.getAttribute("tabindex")||"0",10)),$t=t=>parseInt(t.getAttribute("tabindex")||"0",10)<0,B="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",zt=(t,e=!1)=>{if(!t)return[];const n=Array.from(t.querySelectorAll(B));(e==!0||e=="if-empty"&&n.length===0)&&b(t)&&C(t)&&n.unshift(t);const o=n.filter(C);return o.forEach((s,a)=>{if(rt(s)&&s.contentDocument){const i=s.contentDocument.body;o.splice(a,1,...zt(i))}}),o};function C(t){return!t||t.closest("[inert]")?!1:t.matches(B)&&Et(t)}function N(t,e){if(!t)return[];const n=Array.from(t.querySelectorAll(B)),r=n.filter(X);return e&&X(t)&&r.unshift(t),r.forEach((o,s)=>{if(rt(o)&&o.contentDocument){const a=o.contentDocument.body,i=N(a);r.splice(s,1,...i)}}),!r.length&&e?n:r}function X(t){return t!=null&&t.tabIndex>0?!0:C(t)&&!$t(t)}function ot(t,e){const n=N(t,e),r=n[0]||null,o=n[n.length-1]||null;return[r,o]}function Xt(t,e){const n=N(t),r=(t==null?void 0:t.ownerDocument)||document,o=e??r.activeElement;if(!o)return null;const s=n.indexOf(o);return n[s+1]||null}function je(t){return t.tabIndex<0&&(/^(audio|video|details)$/.test(t.localName)||Tt(t))&&!_t(t)?0:t.tabIndex}function He(t){const{root:e,getInitialEl:n,filter:r,enabled:o=!0}=t;if(!o)return;let s=null;if(s||(s=typeof n=="function"?n():n),s||(s=e==null?void 0:e.querySelector("[data-autofocus],[autofocus]")),!s){const a=N(e);s=r?a.filter(r)[0]:a[0]}return s||e||void 0}function qe(t){const e=t.currentTarget;if(!e)return!1;const[n,r]=ot(e),o=e.ownerDocument||document;return!(o.activeElement===n&&t.shiftKey||o.activeElement===r&&!t.shiftKey||!n&&!r)}function Yt(t){const e=new Set;function n(r){const o=globalThis.requestAnimationFrame(r);e.add(()=>globalThis.cancelAnimationFrame(o))}return n(()=>n(t)),function(){e.forEach(o=>o())}}function T(t){let e;const n=globalThis.requestAnimationFrame(()=>{e=t()});return()=>{globalThis.cancelAnimationFrame(n),e==null||e()}}function Gt(t,e,n){const r=T(()=>{t.removeEventListener(e,o,!0),n()}),o=()=>{r(),n()};return t.addEventListener(e,o,{once:!0,capture:!0}),r}function Zt(t,e){if(!t)return;const{attributes:n,callback:r}=e,o=t.ownerDocument.defaultView||window,s=new o.MutationObserver(a=>{for(const i of a)i.type==="attributes"&&i.attributeName&&n.includes(i.attributeName)&&r(i)});return s.observe(t,{attributes:!0,attributeFilter:n}),()=>s.disconnect()}function We(t,e){const{defer:n}=e,r=n?T:s=>s(),o=[];return o.push(r(()=>{const s=typeof t=="function"?t():t;o.push(Zt(s,e))})),()=>{o.forEach(s=>s==null?void 0:s())}}function Jt(t,e){const{callback:n}=e;if(!t)return;const r=t.ownerDocument.defaultView||window,o=new r.MutationObserver(n);return o.observe(t,{childList:!0,subtree:!0}),()=>o.disconnect()}function _e(t,e){const{defer:n}=e,r=n?T:s=>s(),o=[];return o.push(r(()=>{const s=typeof t=="function"?t():t;o.push(Jt(s,e))})),()=>{o.forEach(s=>s==null?void 0:s())}}function $e(t){const e=()=>t.click();It()?Gt(t,"keyup",e):queueMicrotask(e)}function st(t){const e=At(t);return gt(e)?R(e).body:b(e)&&U(e)?e:st(e)}function Qt(t,e=[]){const n=st(t),r=n===t.ownerDocument.body,o=g(n);return r?e.concat(o,o.visualViewport||[],U(n)?n:[]):e.concat(n,Qt(n,[]))}var te=/auto|scroll|overlay|hidden|clip/;function U(t){const e=g(t),{overflow:n,overflowX:r,overflowY:o,display:s}=e.getComputedStyle(t);return te.test(n+o+r)&&!["inline","contents"].includes(s)}function ee(t){return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth}function ze(t,e){const{rootEl:n,...r}=e||{};!t||!n||!U(n)||!ee(n)||t.scrollIntoView(r)}function Xe(t,e){const{left:n,top:r,width:o,height:s}=e.getBoundingClientRect(),a={x:t.x-n,y:t.y-r},i={x:$(a.x/o),y:$(a.y/s)};function c(u={}){const{dir:l="ltr",orientation:d="horizontal",inverted:f}=u,y=typeof f=="object"?f.x:f,h=typeof f=="object"?f.y:f;return d==="horizontal"?l==="rtl"||y?1-i.x:i.x:h?1-i.y:i.y}return{offset:a,percent:i,getPercentValue:c}}function Ye(t,e){const n=t.body,r="pointerLockElement"in t||"mozPointerLockElement"in t,o=()=>!!t.pointerLockElement;function s(){}function a(c){o(),console.error("PointerLock error occurred:",c),t.exitPointerLock()}if(!r)return;try{n.requestPointerLock()}catch{}const i=[p(t,"pointerlockchange",s,!1),p(t,"pointerlockerror",a,!1)];return()=>{i.forEach(c=>c()),t.exitPointerLock()}}var w="default",K="",x=new WeakMap;function ne(t={}){const{target:e,doc:n}=t,r=n??document,o=r.documentElement;return O()?(w==="default"&&(K=o.style.webkitUserSelect,o.style.webkitUserSelect="none"),w="disabled"):e&&(x.set(e,e.style.userSelect),e.style.userSelect="none"),()=>re({target:e,doc:r})}function re(t={}){const{target:e,doc:n}=t,o=(n??document).documentElement;if(O()){if(w!=="disabled")return;w="restoring",setTimeout(()=>{Yt(()=>{w==="restoring"&&(o.style.webkitUserSelect==="none"&&(o.style.webkitUserSelect=K||""),K="",w="default")})},300)}else if(e&&x.has(e)){const s=x.get(e);e.style.userSelect==="none"&&(e.style.userSelect=s??""),e.getAttribute("style")===""&&e.removeAttribute("style"),x.delete(e)}}function oe(t={}){const{defer:e,target:n,...r}=t,o=e?T:a=>a(),s=[];return s.push(o(()=>{const a=typeof n=="function"?n():n;s.push(ne({...r,target:a}))})),()=>{s.forEach(a=>a==null?void 0:a())}}function Ge(t,e){const{onPointerMove:n,onPointerUp:r}=e,s=[p(t,"pointermove",a=>{const i=et(a),c=Math.sqrt(i.x**2+i.y**2),u=a.pointerType==="touch"?10:5;if(!(c<u)){if(a.pointerType==="mouse"&&a.button===0){r();return}n({point:i,event:a})}},!1),p(t,"pointerup",r,!1),p(t,"pointercancel",r,!1),p(t,"contextmenu",r,!1),oe({doc:t})];return()=>{s.forEach(a=>a())}}function Ze(t){const{pointerNode:e,keyboardNode:n=e,onPress:r,onPressStart:o,onPressEnd:s,isValidKey:a=m=>m.key==="Enter"}=t;if(!e)return E;const i=g(e),c=R(e);let u=E,l=E,d=E;const f=m=>({point:et(m),event:m});function y(m){o==null||o(f(m))}function h(m){s==null||s(f(m))}const it=p(e,"pointerdown",m=>{l();const P=p(i,"pointerup",v=>{const I=tt(v);Z(e,I)?r==null||r(f(v)):s==null||s(f(v))},{passive:!r,once:!0}),L=p(i,"pointercancel",h,{passive:!s,once:!0});l=D(P,L),c.activeElement===n&&m.pointerType==="mouse"&&m.preventDefault(),y(m)},{passive:!o}),at=p(n,"focus",ct);u=D(it,at);function ct(){const m=v=>{if(!a(v))return;const I=lt=>{if(!a(lt))return;const ft=new i.PointerEvent("pointerup"),W=f(ft);r==null||r(W),s==null||s(W)};l(),l=p(n,"keyup",I);const ut=new i.PointerEvent("pointerdown");y(ut)},q=()=>{const v=new i.PointerEvent("pointercancel");h(v)},P=p(n,"keydown",m),L=p(n,"blur",q);d=D(P,L)}return()=>{u(),l(),d()}}function se(t,e={}){const{triggerElement:n,onFocus:r,onFocusEnter:o}=e,s=(t==null?void 0:t.ownerDocument)||document,a=s.body;function i(c){if(c.key!=="Tab")return;let u=null;const[l,d]=ot(t,!0),f=Xt(a,n),y=!l&&!d;c.shiftKey&&f===s.activeElement?(o==null||o(),u=d):c.shiftKey&&(s.activeElement===l||y)?u=n:!c.shiftKey&&s.activeElement===n?(o==null||o(),u=l):!c.shiftKey&&(s.activeElement===d||y)&&(u=f),u&&(c.preventDefault(),typeof r=="function"?r(u):u.focus())}return p(s,"keydown",i,!0)}function Je(t,e){const{defer:n,triggerElement:r,...o}=e,s=n?T:i=>i(),a=[];return a.push(s(()=>{const i=typeof t=="function"?t():t,c=typeof r=="function"?r():r;a.push(se(i,{triggerElement:c,...o}))})),()=>{a.forEach(i=>i==null?void 0:i())}}function Qe(t,e){return Array.from((t==null?void 0:t.querySelectorAll(e))??[])}function tn(t,e){return(t==null?void 0:t.querySelector(e))??null}var j=t=>t.id;function ie(t,e,n=j){return t.find(r=>n(r)===e)}function H(t,e,n=j){const r=ie(t,e,n);return r?t.indexOf(r):-1}function en(t,e,n=!0){let r=H(t,e);return r=n?(r+1)%t.length:Math.min(r+1,t.length-1),t[r]}function nn(t,e,n=!0){let r=H(t,e);return r===-1?n?t[t.length-1]:null:(r=n?(r-1+t.length)%t.length:Math.max(0,r-1),t[r])}function rn(t,e){const{onEntry:n,measure:r,box:o="border-box"}=e,s=(Array.isArray(t)?t:[t]).filter(b),a=g(s[0]),i=u=>{const l=s.map(d=>r(d));n({rects:l,entries:u})};i([]);const c=new a.ResizeObserver(i);return s.forEach(u=>c.observe(u,{box:o})),()=>c.disconnect()}var ae=t=>t.split("").map(e=>{const n=e.charCodeAt(0);return n>0&&n<128?e:n>=128&&n<=255?`/x${n.toString(16)}`.replace("/","\\"):""}).join("").trim(),ce=t=>{var e;return ae(((e=t.dataset)==null?void 0:e.valuetext)??t.textContent??"")},ue=(t,e)=>t.trim().toLowerCase().startsWith(e.toLowerCase());function le(t,e,n,r=j){const o=n?H(t,n,r):-1;let s=n?dt(t,o):t;return e.length===1&&(s=s.filter(i=>r(i)!==n)),s.find(i=>ue(ce(i),e))}function on(t,e){if(!t)return E;const n=Object.keys(e).reduce((r,o)=>(r[o]=t.style.getPropertyValue(o),r),{});return Object.assign(t.style,e),()=>{Object.assign(t.style,n),t.style.length===0&&t.removeAttribute("style")}}function sn(t,e,n){if(!t)return E;const r=t.style.getPropertyValue(e);return t.style.setProperty(e,n),()=>{t.style.setProperty(e,r),t.style.length===0&&t.removeAttribute("style")}}function fe(t,e){const{state:n,activeId:r,key:o,timeout:s=350,itemToId:a}=e,i=n.keysSoFar+o,u=i.length>1&&Array.from(i).every(h=>h===i[0])?i[0]:i;let l=t.slice();const d=le(l,u,r,a);function f(){clearTimeout(n.timer),n.timer=-1}function y(h){n.keysSoFar=h,f(),h!==""&&(n.timer=+setTimeout(()=>{y(""),f()},s))}return y(i),d}var an=Object.assign(fe,{defaultOptions:{keysSoFar:"",timer:-1},isValidEvent:de});function de(t){return t.key.length===1&&!t.ctrlKey&&!t.metaKey}var cn={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},me=1e3/60;function pe(t,e){const n=t();if(b(n)&&n.isConnected)return e(n),()=>{};{const r=setInterval(()=>{const o=t();b(o)&&o.isConnected&&(e(o),clearInterval(r))},me);return()=>clearInterval(r)}}function un(t,e){const n=[];return t==null||t.forEach(r=>{const o=pe(r,e);n.push(o)}),()=>{n.forEach(r=>r())}}function be(t,e){return`${t} returned \`undefined\`. Seems you forgot to wrap component within ${e}`}function ln(t={}){const{name:e,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:s,defaultValue:a}=t,i=_.createContext(a);i.displayName=e;function c(){var l;const u=_.useContext(i);if(!u&&n){const d=new Error(s??be(r,o));throw d.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,d,c),d}return u}return[i.Provider,c,i]}export{N as $,rn as A,zt as B,nn as C,en as D,$e as E,ie as F,Qe as G,un as H,Ve as I,oe as J,Ge as K,Ue as L,cn as M,Oe as N,Ce as O,Re as P,et as Q,tn as R,Xe as S,He as T,We as U,_e as V,Me as W,V as X,Be as Y,Ut as Z,Ze as _,xe as a,X as a0,je as a1,Y as a2,sn as a3,O as a4,Le as a5,Pe as a6,qe as a7,De as a8,Tt as a9,an as aa,ze as ab,Ye as ac,he as ad,Rt as ae,Se as af,Je as ag,Qt as ah,g as b,ln as c,Te as d,p as e,Ae as f,R as g,tt as h,A as i,C as j,Ke as k,b as l,Z as m,st as n,ve as o,Ee as p,Ie as q,T as r,Q as s,Bt as t,on as u,Yt as v,ke as w,Ne as x,Fe as y,we as z};
