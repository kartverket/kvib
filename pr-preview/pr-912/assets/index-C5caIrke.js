var Et=t=>t?"":void 0,Tt=t=>t?"true":void 0,At=2147483647,j=1,k=9,H=11,p=t=>typeof t=="object"&&t!==null,c=t=>p(t)&&t.nodeType===j&&typeof t.nodeName=="string",R=t=>p(t)&&t.nodeType===k,_=t=>p(t)&&t===t.window,V=t=>c(t)?t.localName||"":"#document";function q(t){return["html","body","#document"].includes(V(t))}var P=t=>p(t)&&t.nodeType!==void 0,v=t=>P(t)&&t.nodeType===H&&"host"in t;function X(t,e){return!t||!e||!c(t)||!c(e)?!1:t===e||t.contains(e)}function E(t){return R(t)?t:_(t)?t.document:(t==null?void 0:t.ownerDocument)??document}function z(t){return E(t).documentElement}function f(t){var e;return v(t)?f(t.host):R(t)?t.defaultView??window:c(t)?((e=t.ownerDocument)==null?void 0:e.defaultView)??window:window}function G(t){let e=t.activeElement;for(;e!=null&&e.shadowRoot;){const n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}var T=()=>typeof document<"u";function U(){const t=navigator.userAgentData;return(t==null?void 0:t.platform)??navigator.platform}var A=t=>T()&&t.test(U()),J=t=>T()&&t.test(navigator.userAgent),Q=t=>T()&&t.test(navigator.vendor),Nt=()=>A(/^Mac/),xt=()=>K()&&Q(/apple/i),St=()=>J(/firefox\//i),K=()=>A(/mac|iphone|ipad|ipod/i),Dt=()=>A(/iP(hone|ad|od)|iOS/);function It(t){const{selectionStart:e,selectionEnd:n,value:r}=t.currentTarget;return r.slice(0,e)+t.data+r.slice(n)}function Y(t){var e,n,r;return((e=t.composedPath)==null?void 0:e.call(t))??((r=(n=t.nativeEvent)==null?void 0:n.composedPath)==null?void 0:r.call(n))}function Z(t){const e=Y(t);return(e==null?void 0:e[0])??t.target}var Ct=t=>X(t.currentTarget,Z(t));function Ft(t){const e=t.currentTarget;if(!e)return!1;const n=K();if(n&&!t.metaKey||!n&&!t.ctrlKey)return!1;const r=e.localName;return r==="a"||r==="button"&&e.type==="submit"||r==="input"&&e.type==="submit"}function Mt(t){const e=t.currentTarget;if(!e)return!1;const n=e.localName;return t.altKey?n==="a"||n==="button"&&e.type==="submit"||n==="input"&&e.type==="submit":!1}function Ot(t){var e;return((e=t.nativeEvent)==null?void 0:e.isComposing)??t.isComposing}var N=t=>t.id;function $(t,e,n=N){return t.find(r=>n(r)===e)}function x(t,e,n=N){const r=$(t,e,n);return r?t.indexOf(r):-1}function Rt(t,e,n=!0){let r=x(t,e);return r=n?(r+1)%t.length:Math.min(r+1,t.length-1),t[r]}function Vt(t,e,n=!0){let r=x(t,e);return r===-1?n?t[t.length-1]:null:(r=n?(r-1+t.length)%t.length:Math.max(0,r-1),t[r])}var tt=t=>t.split("").map(e=>{const n=e.charCodeAt(0);return n>0&&n<128?e:n>=128&&n<=255?`/x${n.toString(16)}`.replace("/","\\"):""}).join("").trim(),et=t=>{var e;return tt(((e=t.dataset)==null?void 0:e.valuetext)??t.textContent??"")},nt=(t,e)=>t.trim().toLowerCase().startsWith(e.toLowerCase()),rt=(t,e)=>t.map((n,r)=>t[(Math.max(e,0)+r)%t.length]);function ot(t,e,n,r=N){const o=n?x(t,n,r):-1;let s=n?rt(t,o):t;return e.length===1&&(s=s.filter(i=>r(i)!==n)),s.find(i=>nt(et(i),e))}function st(t,e){const{state:n,activeId:r,key:o,timeout:s=350,itemToId:a}=e,i=n.keysSoFar+o,l=i.length>1&&Array.from(i).every(b=>b===i[0])?i[0]:i;let d=t.slice();const m=ot(d,l,r,a);function F(){clearTimeout(n.timer),n.timer=-1}function M(b){n.keysSoFar=b,F(),b!==""&&(n.timer=+setTimeout(()=>{M(""),F()},s))}return M(i),m}var Kt=Object.assign(st,{defaultOptions:{keysSoFar:"",timer:-1},isValidEvent:it});function it(t){return t.key.length===1&&!t.ctrlKey&&!t.metaKey}var y=new WeakMap;function Bt(t){return y.has(t)||y.set(t,f(t).getComputedStyle(t)),y.get(t)}function at(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||v(t)&&t.host||z(t);return v(e)?e.host:e}var S=t=>typeof t=="object"&&t!==null&&t.nodeType===1,B=t=>S(t)&&t.tagName==="IFRAME";function ut(t){return S(t)?t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0:!1}function ct(t){return parseInt(t.getAttribute("tabindex")||"0",10)<0}var D="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",lt=(t,e=!1)=>{if(!t)return[];const n=Array.from(t.querySelectorAll(D));(e==!0||e=="if-empty"&&n.length===0)&&S(t)&&w(t)&&n.unshift(t);const o=n.filter(w);return o.forEach((s,a)=>{if(B(s)&&s.contentDocument){const i=s.contentDocument.body;o.splice(a,1,...lt(i))}}),o};function w(t){return!t||t.closest("[inert]")?!1:t.matches(D)&&ut(t)}function g(t,e){if(!t)return[];const n=Array.from(t.querySelectorAll(D)),r=n.filter(O);return e&&O(t)&&r.unshift(t),r.forEach((o,s)=>{if(B(o)&&o.contentDocument){const a=o.contentDocument.body,i=g(a);r.splice(s,1,...i)}}),!r.length&&e?n:r}function O(t){return t!=null&&t.tabIndex>0?!0:w(t)&&!ct(t)}function L(t,e){const n=g(t,e),r=n[0]||null,o=n[n.length-1]||null;return[r,o]}function ft(t,e){const n=g(t),r=(t==null?void 0:t.ownerDocument)||document,o=e??r.activeElement;if(!o)return null;const s=n.indexOf(o);return n[s+1]||null}function Lt(t){const{root:e,getInitialEl:n,filter:r,enabled:o=!0}=t;if(!o)return;let s=null;if(s||(s=typeof n=="function"?n():n),s||(s=e==null?void 0:e.querySelector("[data-autofocus],[autofocus]")),!s){const a=g(e);s=r?a.filter(r)[0]:a[0]}return s||e||void 0}function Wt(t){const e=t.currentTarget;if(!e)return!1;const[n,r]=L(e),o=e.ownerDocument||document;return!(o.activeElement===n&&t.shiftKey||o.activeElement===r&&!t.shiftKey||!n&&!r)}function jt(t){if(t==null||!c(t))return!1;try{const e=f(t);return t instanceof e.HTMLInputElement&&t.selectionStart!=null||/(textarea|select)/.test(t.localName)||t.isContentEditable}catch{return!1}}var dt=/auto|scroll|overlay|hidden|clip/;function I(t){const e=f(t),{overflow:n,overflowX:r,overflowY:o,display:s}=e.getComputedStyle(t);return dt.test(n+o+r)&&!["inline","contents"].includes(s)}function kt(t){const e=new Set;function n(r){const o=globalThis.requestAnimationFrame(r);e.add(()=>globalThis.cancelAnimationFrame(o))}return n(()=>n(t)),function(){e.forEach(o=>o())}}function C(t){const e=globalThis.requestAnimationFrame(t);return()=>{globalThis.cancelAnimationFrame(e)}}function mt(t,e){if(!t)return;const{attributes:n,callback:r}=e,o=t.ownerDocument.defaultView||window,s=new o.MutationObserver(a=>{for(const i of a)i.type==="attributes"&&i.attributeName&&n.includes(i.attributeName)&&r(i)});return s.observe(t,{attributes:!0,attributeFilter:n}),()=>s.disconnect()}function Ht(t,e){const{defer:n}=e,r=n?C:s=>s(),o=[];return o.push(r(()=>{const s=typeof t=="function"?t():t;o.push(mt(s,e))})),()=>{o.forEach(s=>s==null?void 0:s())}}function bt(t,e){const{callback:n}=e;if(!t)return;const r=t.ownerDocument.defaultView||window,o=new r.MutationObserver(n);return o.observe(t,{childList:!0,subtree:!0}),()=>o.disconnect()}function _t(t,e){const{defer:n}=e,r=n?C:s=>s(),o=[];return o.push(r(()=>{const s=typeof t=="function"?t():t;o.push(bt(s,e))})),()=>{o.forEach(s=>s==null?void 0:s())}}function W(t){const e=at(t);return q(e)?E(e).body:c(e)&&I(e)?e:W(e)}function pt(t,e=[]){const n=W(t),r=n===t.ownerDocument.body,o=f(n);return r?e.concat(o,o.visualViewport||[],I(n)?n:[]):e.concat(n,pt(n,[]))}function gt(t,e={}){const{triggerElement:n,onFocus:r}=e,o=(t==null?void 0:t.ownerDocument)||document,s=o.body;function a(i){if(i.key!=="Tab")return;let u=null;const[l,d]=L(t,!0),m=!l&&!d;i.shiftKey&&(o.activeElement===l||m)?u=n:!i.shiftKey&&o.activeElement===n?u=l:!i.shiftKey&&(o.activeElement===d||m)&&(u=ft(s,n)),u&&(i.preventDefault(),typeof r=="function"?r(u):u.focus())}return o==null||o.addEventListener("keydown",a,!0),()=>{o==null||o.removeEventListener("keydown",a,!0)}}function qt(t,e){const{defer:n,triggerElement:r,...o}=e,s=n?C:i=>i(),a=[];return a.push(s(()=>{const i=typeof t=="function"?t():t,u=typeof r=="function"?r():r;a.push(gt(i,{triggerElement:u,...o}))})),()=>{a.forEach(i=>i==null?void 0:i())}}function Pt(t,e){return Array.from((t==null?void 0:t.querySelectorAll(e))??[])}function Xt(t,e){return(t==null?void 0:t.querySelector(e))??null}function zt(t){const e={getRootNode:n=>{var r;return((r=n.getRootNode)==null?void 0:r.call(n))??document},getDoc:n=>E(e.getRootNode(n)),getWin:n=>e.getDoc(n).defaultView??window,getActiveElement:n=>G(e.getRootNode(n)),isActiveElement:(n,r)=>r===e.getActiveElement(n),getById:(n,r)=>e.getRootNode(n).getElementById(r),setValue:(n,r)=>{if(n==null||r==null)return;const o=r.toString();n.value!==o&&(n.value=r.toString())}};return{...e,...t}}function yt(t){return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth}function Gt(t,e){const{rootEl:n,...r}=e||{};!t||!n||!I(n)||!yt(n)||t.scrollIntoView(r)}var h=new WeakMap;function ht(t,e,n){h.has(t)||h.set(t,new Map);const r=h.get(t),o=r.get(e);if(!o)return r.set(e,n()),()=>{var i;(i=r.get(e))==null||i(),r.delete(e)};const s=n(),a=()=>{s(),o(),r.delete(e)};return r.set(e,a),()=>{r.get(e)===a&&(s(),r.set(e,o))}}function Ut(t,e){return t?ht(t,"style",()=>{const r=t.style.cssText;return Object.assign(t.style,e),()=>{t.style.cssText=r}}):()=>{}}var Jt={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},vt=1e3/60;function wt(t,e){const n=t();if(c(n)&&n.isConnected)return e(n),()=>{};{const r=setInterval(()=>{const o=t();c(o)&&o.isConnected&&(e(o),clearInterval(r))},vt);return()=>clearInterval(r)}}function Qt(t,e){const n=[];return t==null||t.forEach(r=>{const o=wt(r,e);n.push(o)}),()=>{n.forEach(r=>r())}}export{v as A,Rt as B,Vt as C,Bt as D,Ct as E,Kt as F,Wt as G,jt as H,Mt as I,Ft as J,Gt as K,Dt as L,St as M,At as N,$ as O,Xt as P,pt as Q,Tt as a,K as b,zt as c,Et as d,X as e,lt as f,It as g,xt as h,Ot as i,Lt as j,Z as k,E as l,c as m,kt as n,f as o,qt as p,Pt as q,C as r,Ut as s,w as t,W as u,Jt as v,Qt as w,Nt as x,Ht as y,_t as z};
