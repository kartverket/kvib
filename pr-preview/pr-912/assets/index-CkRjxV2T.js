import{b as L,f as P,c as F}from"./index-Dltf2pIY.js";import{s as H,m as N,r as p,y as Y,l as T,u as k,f as _,z as x}from"./index-DXXQsaeK.js";import{k as y}from"./index-CxfNaWX6.js";function U(e){const t={each(n){var o;for(let r=0;r<((o=e.frames)==null?void 0:o.length);r+=1){const c=e.frames[r];c&&n(c)}},addEventListener(n,o,r){return t.each(c=>{try{c.document.addEventListener(n,o,r)}catch{}}),()=>{try{t.removeEventListener(n,o,r)}catch{}}},removeEventListener(n,o,r){t.each(c=>{try{c.document.removeEventListener(n,o,r)}catch{}})}};return t}function A(e){const t=e.frameElement!=null?e.parent:null;return{addEventListener:(n,o,r)=>{try{t==null||t.addEventListener(n,o,r)}catch{}return()=>{try{t==null||t.removeEventListener(n,o,r)}catch{}}},removeEventListener:(n,o,r)=>{try{t==null||t.removeEventListener(n,o,r)}catch{}}}}var O="pointerdown.outside",W="focus.outside";function M(e){for(const t of e)if(k(t)&&Y(t))return!0;return!1}var C=e=>"clientY"in e;function R(e,t){if(!C(t)||!e)return!1;const n=e.getBoundingClientRect();return n.width===0||n.height===0?!1:n.top<=t.clientY&&t.clientY<=n.top+n.height&&n.left<=t.clientX&&t.clientX<=n.left+n.width}function I(e,t){if(!t||!C(e))return!1;const o=t.scrollHeight>t.clientHeight&&e.clientX>t.clientWidth,c=t.scrollWidth>t.clientWidth&&e.clientY>t.clientHeight;return o||c}function V(e,t){const{exclude:n,onFocusOutside:o,onPointerDownOutside:r,onInteractOutside:c,defer:v}=t;if(!e)return;const f=H(e),w=N(e),d=U(w),E=A(w);function g(i){const s=T(i);if(!k(s)||_(e,s)||R(e,i)||I(i,s))return!1;const a=x(e);return I(i,a)?!1:!(n!=null&&n(s))}const l=new Set;function h(i){function s(){var S;const a=v?p:b=>b(),X=((S=i.composedPath)==null?void 0:S.call(i))??[i.target];a(()=>{if(!(!e||!g(i))){if(r||c){const b=y(r,c);e.addEventListener(O,b,{once:!0})}P(e,O,{bubbles:!1,cancelable:!0,detail:{originalEvent:i,contextmenu:F(i),focusable:M(X)}})}})}i.pointerType==="touch"?(l.forEach(a=>a()),l.add(L(f,"click",s,{once:!0})),l.add(E.addEventListener("click",s,{once:!0})),l.add(d.addEventListener("click",s,{once:!0}))):s()}const u=new Set,D=setTimeout(()=>{u.add(L(f,"pointerdown",h,!0)),u.add(E.addEventListener("pointerdown",h,!0)),u.add(d.addEventListener("pointerdown",h,!0))},0);function m(i){(v?p:a=>a())(()=>{if(!(!e||!g(i))){if(o||c){const a=y(o,c);e.addEventListener(W,a,{once:!0})}P(e,W,{bubbles:!1,cancelable:!0,detail:{originalEvent:i,contextmenu:!1,focusable:Y(T(i))}})}})}return u.add(L(f,"focusin",m,!0)),u.add(E.addEventListener("focusin",m,!0)),u.add(d.addEventListener("focusin",m,!0)),()=>{clearTimeout(D),l.forEach(i=>i()),u.forEach(i=>i())}}function q(e,t){const{defer:n}=t,o=n?p:c=>c(),r=[];return r.push(o(()=>{const c=typeof e=="function"?e():e;r.push(V(c,t))})),()=>{r.forEach(c=>c==null?void 0:c())}}export{q as t};
