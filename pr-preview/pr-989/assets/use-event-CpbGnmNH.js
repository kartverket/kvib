import{c as C}from"./create-context-Bo3s1W4a.js";import{r as o}from"./index-Cjd7pOeM.js";import"./index-Bxvi1LNM.js";import"./jsx-runtime-CLpGMVip.js";import{g as q,s as L,b as h,i as k,d as A}from"./factory-CBKQa84h.js";const[B,D]=C({name:"LocaleContext",hookName:"useLocaleContext",providerName:"<LocaleProvider />",strict:!1,defaultValue:{dir:"ltr",locale:"en-US"}});function R(t){return new Proxy({},{get(){return t}})}var G=()=>t=>Array.from(new Set(t)),H=R(t=>t),x=t=>(t==null?void 0:t.constructor.name)==="Array",v=(t,e)=>{if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!l(t[n],e[n]))return!1;return!0},l=(t,e)=>{if(Object.is(t,e))return!0;if(t==null&&e!=null||t!=null&&e==null)return!1;if(typeof(t==null?void 0:t.isEqual)=="function"&&typeof(e==null?void 0:e.isEqual)=="function")return t.isEqual(e);if(typeof t=="function"&&typeof e=="function")return t.toString()===e.toString();if(x(t)&&x(e))return v(Array.from(t),Array.from(e));if(typeof t!="object"||typeof e!="object")return!1;const n=Object.keys(e??Object.create(null)),r=n.length;for(let s=0;s<r;s++)if(!Reflect.has(t,n[s]))return!1;for(let s=0;s<r;s++){const u=n[s];if(!l(t[u],e[u]))return!1}return!0},M=Function.prototype.toString;M.call(Object);function E(t){if(!O(t)||t===void 0)return t;const e=Reflect.ownKeys(t).filter(r=>typeof r=="string"),n={};for(const r of e){const s=t[r];s!==void 0&&(n[r]=E(s))}return n}var O=t=>t&&typeof t=="object"&&t.constructor===Object;function w(t,e){const n=o.useRef(!1),r=o.useRef(!1);o.useEffect(()=>{if(n.current&&r.current)return t();r.current=!0},e),o.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}var P=q("__zag__targetCache",()=>new WeakMap);function S(t,e){const{actions:n,context:r,sync:s}=e??{},u=o.useRef(void 0),c=o.useRef(void 0),p=o.useSyncExternalStore(o.useCallback(f=>L(t.state,f,s),[s]),()=>{const f=h(t.state);try{if(u.current&&c.current&&!k(u.current,f,c.current,new WeakMap))return u.current}catch{}return f},()=>h(t.state));t.setOptions({actions:n});const i=o.useMemo(()=>E(r??{}),[r]);w(()=>{const f=Object.entries(i),d=t.contextSnapshot??{};f.map(([a,m])=>({key:a,curr:m,prev:d[a],equal:l(d[a],m)})).every(({equal:a})=>a)||t.setContext(i)},[i]);const y=new WeakMap;o.useEffect(()=>{u.current=p,c.current=y});const g=o.useMemo(()=>new WeakMap,[]);return A(p,y,g,P)}function J(t){return[S(t),t.send]}function j(t){const e=o.useRef(void 0);return e.current||(e.current={v:t()}),e.current.v}var _=typeof document<"u"?o.useLayoutEffect:o.useEffect;function W(t,e){const{state:n,context:r}=e??{},s=j(()=>{const c=typeof t=="function"?t():t;return r&&c.setContext(r),c._created(),c}),u=o.useRef(void 0);return _(()=>{const c=n??u.current;return s.start(c),()=>{s.stop()}},[]),s}function Q(t,e){const n=W(t,e);return[S(n,e),n.send,n]}function X(t,e={}){const{sync:n=!1}=e,r=z(t);return o.useCallback((...s)=>{var u;return n?queueMicrotask(()=>{var c;return(c=r.current)==null?void 0:c.call(r,...s)}):(u=r.current)==null?void 0:u.call(r,...s)},[n,r])}function z(t){const e=o.useRef(t);return e.current=t,e}export{B as L,X as a,Q as b,G as c,J as d,H as n,D as u};
