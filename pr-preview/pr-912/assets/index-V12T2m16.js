import{c as I,g as G,r as o}from"./index-Wp2u197Z.js";var Y="Expected a function",A=NaN,K="[object Symbol]",Q=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt,te=typeof I=="object"&&I&&I.Object===Object&&I,ne=typeof self=="object"&&self&&self.Object===Object&&self,re=te||ne||Function("return this")(),se=Object.prototype,oe=se.toString,ue=Math.max,ce=Math.min,M=function(){return re.Date.now()};function ae(e,t,n){var s,u,a,r,c,d,l=0,g=!1,w=!1,i=!0;if(typeof e!="function")throw new TypeError(Y);t=j(t)||0,F(n)&&(g=!!n.leading,w="maxWait"in n,a=w?ue(j(n.maxWait)||0,t):a,i="trailing"in n?!!n.trailing:i);function f(S){var C=s,z=u;return s=u=void 0,l=S,r=e.apply(z,C),r}function h(S){return l=S,c=setTimeout(p,t),g?f(S):r}function v(S){var C=S-d,z=S-l,_=t-C;return w?ce(_,a-z):_}function E(S){var C=S-d,z=S-l;return d===void 0||C>=t||C<0||w&&z>=a}function p(){var S=M();if(E(S))return T(S);c=setTimeout(p,v(S))}function T(S){return c=void 0,i&&s?f(S):(s=u=void 0,r)}function y(){c!==void 0&&clearTimeout(c),l=0,s=d=u=c=void 0}function k(){return c===void 0?r:T(M())}function R(){var S=M(),C=E(S);if(s=arguments,u=this,d=S,C){if(c===void 0)return h(d);if(w)return c=setTimeout(p,t),f(d)}return c===void 0&&(c=setTimeout(p,t)),r}return R.cancel=y,R.flush=k,R}function F(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ie(e){return!!e&&typeof e=="object"}function de(e){return typeof e=="symbol"||ie(e)&&oe.call(e)==K}function j(e){if(typeof e=="number")return e;if(de(e))return A;if(F(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Q,"");var n=X.test(e);return n||Z.test(e)?ee(e.slice(2),n?2:8):q.test(e)?A:+e}var le=ae;const $=G(le);function fe(e=!1){if(typeof e!="boolean")throw new Error("defaultValue must be `true` or `false`");const[t,n]=o.useState(e),s=o.useCallback(()=>{n(!0)},[]),u=o.useCallback(()=>{n(!1)},[]),a=o.useCallback(()=>{n(r=>!r)},[]);return{value:t,setValue:n,setTrue:s,setFalse:u,toggle:a}}var m=typeof window<"u"?o.useLayoutEffect:o.useEffect;function b(e,t,n,s){const u=o.useRef(t);m(()=>{u.current=t},[t]),o.useEffect(()=>{const a=(n==null?void 0:n.current)??window;if(!(a&&a.addEventListener))return;const r=c=>{u.current(c)};return a.addEventListener(e,r,s),()=>{a.removeEventListener(e,r,s)}},[e,n,s])}function Re(e){b("click",t=>{e(t)})}function ze(){const[e,t]=o.useState(null),n=o.useCallback(async s=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(s),t(s),!0}catch(u){return console.warn("Copy failed",u),t(null),!1}},[]);return[e,n]}function ge(e){const[t,n]=o.useState(e??0),s=o.useCallback(()=>{n(r=>r+1)},[]),u=o.useCallback(()=>{n(r=>r-1)},[]),a=o.useCallback(()=>{n(e??0)},[e]);return{count:t,increment:s,decrement:u,reset:a,setCount:n}}function we(e,t){const n=o.useRef(e);m(()=>{n.current=e},[e]),o.useEffect(()=>{if(t===null)return;const s=setInterval(()=>{n.current()},t);return()=>{clearInterval(s)}},[t])}function Te({countStart:e,countStop:t=0,intervalMs:n=1e3,isIncrement:s=!1}){const{count:u,increment:a,decrement:r,reset:c}=ge(e),{value:d,setTrue:l,setFalse:g}=fe(!1),w=o.useCallback(()=>{g(),c()},[g,c]),i=o.useCallback(()=>{if(u===t){g();return}s?a():r()},[u,t,r,a,s,g]);return we(i,d?n:null),[u,{startCountdown:l,stopCountdown:g,resetCountdown:w}]}function L(e){const t=o.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return m(()=>{t.current=e},[e]),o.useCallback((...n)=>{var s;return(s=t.current)==null?void 0:s.call(t,...n)},[t])}var D=typeof window>"u";function J(e,t,n={}){const{initializeWithValue:s=!0}=n,u=o.useCallback(i=>n.serializer?n.serializer(i):JSON.stringify(i),[n]),a=o.useCallback(i=>{if(n.deserializer)return n.deserializer(i);if(i==="undefined")return;const f=t instanceof Function?t():t;let h;try{h=JSON.parse(i)}catch(v){return console.error("Error parsing JSON:",v),f}return h},[n,t]),r=o.useCallback(()=>{const i=t instanceof Function?t():t;if(D)return i;try{const f=window.localStorage.getItem(e);return f?a(f):i}catch(f){return console.warn(`Error reading localStorage key “${e}”:`,f),i}},[t,e,a]),[c,d]=o.useState(()=>s?r():t instanceof Function?t():t),l=L(i=>{D&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const f=i instanceof Function?i(r()):i;window.localStorage.setItem(e,u(f)),d(f),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(f){console.warn(`Error setting localStorage key “${e}”:`,f)}}),g=L(()=>{D&&console.warn(`Tried removing localStorage key “${e}” even though environment is not a client`);const i=t instanceof Function?t():t;window.localStorage.removeItem(e),d(i),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});o.useEffect(()=>{d(r())},[e]);const w=o.useCallback(i=>{i.key&&i.key!==e||d(r())},[e,r]);return b("storage",w),b("local-storage",w),[c,l,g]}var he=typeof window>"u";function U(e,{defaultValue:t=!1,initializeWithValue:n=!0}={}){const s=c=>he?t:window.matchMedia(c).matches,[u,a]=o.useState(()=>n?s(e):t);function r(){a(s(e))}return m(()=>{const c=window.matchMedia(e);return r(),c.addListener?c.addListener(r):c.addEventListener("change",r),()=>{c.removeListener?c.removeListener(r):c.removeEventListener("change",r)}},[e]),u}var Se="(prefers-color-scheme: dark)",ve="usehooks-ts-dark-mode";function Ie(e={}){const{defaultValue:t,localStorageKey:n=ve,initializeWithValue:s=!0}=e,u=U(Se,{initializeWithValue:s,defaultValue:t}),[a,r]=J(n,t??u??!1,{initializeWithValue:s});return m(()=>{u!==a&&r(u)},[u]),{isDarkMode:a,toggle:()=>{r(c=>!c)},enable:()=>{r(!0)},disable:()=>{r(!1)},set:c=>{r(c)}}}function V(e){const t=o.useRef(e);t.current=e,o.useEffect(()=>()=>{t.current()},[])}function W(e,t=500,n){const s=o.useRef();V(()=>{s.current&&s.current.cancel()});const u=o.useMemo(()=>{const a=$(e,t,n),r=(...c)=>a(...c);return r.cancel=()=>{a.cancel()},r.isPending=()=>!!s.current,r.flush=()=>a.flush(),r},[e,t,n]);return o.useEffect(()=>{s.current=$(e,t,n)},[e,t,n]),u}function Oe(e,t,n){const s=(n==null?void 0:n.equalityFn)??((l,g)=>l===g),u=e instanceof Function?e():e,[a,r]=o.useState(u),c=o.useRef(u),d=W(r,t,n);return s(c.current,u)||(d(u),c.current=u),[a,d]}function Le(e,t={}){const{preserveTitleOnUnmount:n=!0}=t,s=o.useRef(null);m(()=>{s.current=window.document.title},[]),m(()=>{window.document.title=e},[e]),V(()=>{!n&&s.current&&(window.document.title=s.current)})}function Me(e){const[t,n]=o.useState(!1),s=()=>{n(!0)},u=()=>{n(!1)};return b("mouseenter",s,e),b("mouseleave",u,e),t}function De({threshold:e=0,root:t=null,rootMargin:n="0%",freezeOnceVisible:s=!1,initialIsIntersecting:u=!1,onChange:a}={}){var r;const[c,d]=o.useState(null),[l,g]=o.useState(()=>({isIntersecting:u,entry:void 0})),w=o.useRef();w.current=a;const i=((r=l.entry)==null?void 0:r.isIntersecting)&&s;o.useEffect(()=>{if(!c||!("IntersectionObserver"in window)||i)return;let v;const E=new IntersectionObserver(p=>{const T=Array.isArray(E.thresholds)?E.thresholds:[E.thresholds];p.forEach(y=>{const k=y.isIntersecting&&T.some(R=>y.intersectionRatio>=R);g({isIntersecting:k,entry:y}),w.current&&w.current(k,y),k&&s&&v&&(v(),v=void 0)})},{threshold:e,root:t,rootMargin:n});return E.observe(c),()=>{E.disconnect()}},[c,JSON.stringify(e),t,n,i,s]);const f=o.useRef(null);o.useEffect(()=>{var v;!c&&((v=l.entry)!=null&&v.target)&&!s&&!i&&f.current!==l.entry.target&&(f.current=l.entry.target,g({isIntersecting:u,entry:void 0}))},[c,l.entry,s,i,u]);const h=[d,!!l.isIntersecting,l.entry];return h.ref=h[0],h.isIntersecting=h[1],h.entry=h[2],h}function xe(){const[e,t]=o.useState(!1);return o.useEffect(()=>{t(!0)},[]),e}function be(){const e=o.useRef(!1);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),o.useCallback(()=>e.current,[])}function Fe(e=new Map){const[t,n]=o.useState(new Map(e)),s={set:o.useCallback((u,a)=>{n(r=>{const c=new Map(r);return c.set(u,a),c})},[]),setAll:o.useCallback(u=>{n(()=>new Map(u))},[]),remove:o.useCallback(u=>{n(a=>{const r=new Map(a);return r.delete(u),r})},[]),reset:o.useCallback(()=>{n(()=>new Map)},[])};return[t,s]}function We(e,t,n="mousedown",s={}){b(n,u=>{const a=u.target;if(!a||!a.isConnected)return;(Array.isArray(e)?e.filter(c=>!!c.current).every(c=>c.current&&!c.current.contains(a)):e.current&&!e.current.contains(a))&&t(u)},void 0,s)}var N=typeof window>"u";function _e(e,t={}){let{initializeWithValue:n=!0}=t;N&&(n=!1);const s=o.useCallback(d=>{if(t.deserializer)return t.deserializer(d);if(d==="undefined")return;let l;try{l=JSON.parse(d)}catch(g){return console.error("Error parsing JSON:",g),null}return l},[t]),u=o.useCallback(()=>{if(N)return null;try{const d=window.localStorage.getItem(e);return d?s(d):null}catch(d){return console.warn(`Error reading localStorage key “${e}”:`,d),null}},[e,s]),[a,r]=o.useState(()=>{if(n)return u()});o.useEffect(()=>{r(u())},[e]);const c=o.useCallback(d=>{d.key&&d.key!==e||r(u())},[e,u]);return b("storage",c),b("local-storage",c),a}var P={width:void 0,height:void 0};function Ae(e){const{ref:t,box:n="content-box"}=e,[{width:s,height:u},a]=o.useState(P),r=be(),c=o.useRef({...P}),d=o.useRef(void 0);return d.current=e.onResize,o.useEffect(()=>{if(!t.current||typeof window>"u"||!("ResizeObserver"in window))return;const l=new ResizeObserver(([g])=>{const w=n==="border-box"?"borderBoxSize":n==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",i=B(g,w,"inlineSize"),f=B(g,w,"blockSize");if(c.current.width!==i||c.current.height!==f){const v={width:i,height:f};c.current.width=i,c.current.height=f,d.current?d.current(v):r()&&a(v)}});return l.observe(t.current,{box:n}),()=>{l.disconnect()}},[n,t,r]),{width:s,height:u}}function B(e,t,n){return e[t]?Array.isArray(e[t])?e[t][0][n]:e[t][n]:t==="contentBoxSize"?e.contentRect[n==="inlineSize"?"width":"height"]:void 0}var H=typeof window>"u";function je(e={}){let{initializeWithValue:t=!0}=e;H&&(t=!1);const n=()=>{if(!H)return window.screen},[s,u]=o.useState(()=>{if(t)return n()}),a=W(u,e.debounceDelay);function r(){const c=n(),d=e.debounceDelay?a:u;if(c){const{width:l,height:g,availHeight:w,availWidth:i,colorDepth:f,orientation:h,pixelDepth:v}=c;d({width:l,height:g,availHeight:w,availWidth:i,colorDepth:f,orientation:h,pixelDepth:v})}}return b("resize",r),m(()=>{r()},[]),s}var O=new Map;function me(e){const t=document.querySelector(`script[src="${e}"]`),n=t==null?void 0:t.getAttribute("data-status");return{node:t,status:n}}function $e(e,t){const[n,s]=o.useState(()=>!e||t!=null&&t.shouldPreventLoad?"idle":typeof window>"u"?"loading":O.get(e)??"loading");return o.useEffect(()=>{if(!e||t!=null&&t.shouldPreventLoad)return;const u=O.get(e);if(u==="ready"||u==="error"){s(u);return}const a=me(e);let r=a.node;if(r)s(a.status??u??"loading");else{r=document.createElement("script"),r.src=e,r.async=!0,t!=null&&t.id&&(r.id=t.id),r.setAttribute("data-status","loading"),document.body.appendChild(r);const d=l=>{const g=l.type==="load"?"ready":"error";r==null||r.setAttribute("data-status",g)};r.addEventListener("load",d),r.addEventListener("error",d)}const c=d=>{const l=d.type==="load"?"ready":"error";s(l),O.set(e,l)};return r.addEventListener("load",c),r.addEventListener("error",c),()=>{r&&(r.removeEventListener("load",c),r.removeEventListener("error",c)),r&&(t!=null&&t.removeOnUnmount)&&(r.remove(),O.delete(e))}},[e,t==null?void 0:t.shouldPreventLoad,t==null?void 0:t.removeOnUnmount,t==null?void 0:t.id]),n}var Ee=typeof window>"u";function Ne(e={}){const{autoLock:t=!0,lockTarget:n,widthReflow:s=!0}=e,[u,a]=o.useState(!1),r=o.useRef(null),c=o.useRef(null),d=()=>{if(r.current){const{overflow:g,paddingRight:w}=r.current.style;if(c.current={overflow:g,paddingRight:w},s){const i=r.current===document.body?window.innerWidth:r.current.offsetWidth,f=parseInt(window.getComputedStyle(r.current).paddingRight,10)||0,h=i-r.current.scrollWidth;r.current.style.paddingRight=`${h+f}px`}r.current.style.overflow="hidden",a(!0)}},l=()=>{r.current&&c.current&&(r.current.style.overflow=c.current.overflow,s&&(r.current.style.paddingRight=c.current.paddingRight)),a(!1)};return m(()=>{if(!Ee)return n&&(r.current=typeof n=="string"?document.querySelector(n):n),r.current||(r.current=document.body),t&&d(),()=>{l()}},[t,n,s]),{isLocked:u,lock:d,unlock:l}}var x=typeof window>"u";function Pe(e,t,n={}){const{initializeWithValue:s=!0}=n,u=o.useCallback(i=>n.serializer?n.serializer(i):JSON.stringify(i),[n]),a=o.useCallback(i=>{if(n.deserializer)return n.deserializer(i);if(i==="undefined")return;const f=t instanceof Function?t():t;let h;try{h=JSON.parse(i)}catch(v){return console.error("Error parsing JSON:",v),f}return h},[n,t]),r=o.useCallback(()=>{const i=t instanceof Function?t():t;if(x)return i;try{const f=window.sessionStorage.getItem(e);return f?a(f):i}catch(f){return console.warn(`Error reading sessionStorage key “${e}”:`,f),i}},[t,e,a]),[c,d]=o.useState(()=>s?r():t instanceof Function?t():t),l=L(i=>{x&&console.warn(`Tried setting sessionStorage key “${e}” even though environment is not a client`);try{const f=i instanceof Function?i(r()):i;window.sessionStorage.setItem(e,u(f)),d(f),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))}catch(f){console.warn(`Error setting sessionStorage key “${e}”:`,f)}}),g=L(()=>{x&&console.warn(`Tried removing sessionStorage key “${e}” even though environment is not a client`);const i=t instanceof Function?t():t;window.sessionStorage.removeItem(e),d(i),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))});o.useEffect(()=>{d(r())},[e]);const w=o.useCallback(i=>{i.key&&i.key!==e||d(r())},[e,r]);return b("storage",w),b("session-storage",w),[c,l,g]}function Be(e){const[t,n]=o.useState(1),s=t+1<=e,u=t-1>0,a=o.useCallback(l=>{const g=l instanceof Function?l(t):l;if(g>=1&&g<=e){n(g);return}throw new Error("Step not valid")},[e,t]),r=o.useCallback(()=>{s&&n(l=>l+1)},[s]),c=o.useCallback(()=>{u&&n(l=>l-1)},[u]),d=o.useCallback(()=>{n(1)},[]);return[t,{goToNextStep:r,goToPrevStep:c,canGoToNextStep:s,canGoToPrevStep:u,setStep:a,reset:d}]}var Ce="(prefers-color-scheme: dark)",pe="usehooks-ts-ternary-dark-mode";function He({defaultValue:e="system",localStorageKey:t=pe,initializeWithValue:n=!0}={}){const s=U(Ce,{initializeWithValue:n}),[u,a]=J(t,e,{initializeWithValue:n});return{isDarkMode:u==="dark"||u==="system"&&s,ternaryDarkMode:u,setTernaryDarkMode:a,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];a(l=>{const g=(d.indexOf(l)+1)%d.length;return d[g]})}}}function Je(e,t){const n=o.useRef(e);m(()=>{n.current=e},[e]),o.useEffect(()=>{if(!t&&t!==0)return;const s=setTimeout(()=>{n.current()},t);return()=>{clearTimeout(s)}},[t])}function Ue(e){const[t,n]=o.useState(!!e),s=o.useCallback(()=>{n(u=>!u)},[]);return[t,s,n]}var ye=typeof window>"u";function Ve(e={}){let{initializeWithValue:t=!0}=e;ye&&(t=!1);const[n,s]=o.useState(()=>t?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),u=W(s,e.debounceDelay);function a(){(e.debounceDelay?u:s)({width:window.innerWidth,height:window.innerHeight})}return b("resize",a),m(()=>{a()},[]),n}export{Ne as A,Pe as B,Be as C,He as D,Je as E,V as F,Ve as G,U as a,Ue as b,fe as c,Re as d,ze as e,Te as f,ge as g,Ie as h,W as i,Oe as j,Le as k,L as l,b as m,Me as n,De as o,we as p,xe as q,be as r,m as s,J as t,Ae as u,Fe as v,We as w,_e as x,je as y,$e as z};
