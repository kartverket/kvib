import{c as x}from"./create-recipe-context-AlCFSakd.js";import{j as v}from"./jsx-runtime-sfY7k0Xq.js";import{L as b,u as g,o as h}from"./index-DCo38vF6.js";import{r as c}from"./index-CcKhGcwW.js";import{a as y,c as P}from"./factory-ZiKyq5QJ.js";import{u as l}from"./use-field-context-CcEUgBGI.js";import{z as O}from"./index-DussGwo5.js";var w=e=>{var m;if(!e)return;const a=b(e),o=g(e),i=h(e),t=()=>{e.style.height="auto";const r=parseInt(a.borderTopWidth,10),f=parseInt(a.borderBottomWidth,10);e.style.height=`${e.scrollHeight+r+f}px`};e.addEventListener("input",t);const n=Object.getPrototypeOf(e),s=Object.getOwnPropertyDescriptor(n,"value");Object.defineProperty(e,"value",{...s,set(){var r;(r=s==null?void 0:s.set)==null||r.apply(this,arguments),t()}});const p=new o.ResizeObserver(()=>t());p.observe(e);const d=new o.MutationObserver(()=>t());return d.observe(e,{attributes:!0,attributeFilter:["rows","placeholder"]}),(m=i.fonts)==null||m.addEventListener("loadingdone",t),()=>{var r;e.removeEventListener("input",t),(r=i.fonts)==null||r.removeEventListener("loadingdone",t),p.disconnect(),d.disconnect()}};const u=c.forwardRef((e,a)=>{const{autoresize:o,...i}=e,t=c.useRef(null),n=l(),s=O(n==null?void 0:n.getTextareaProps(),{style:{resize:o?"none":void 0}},i);return c.useEffect(()=>{if(o)return w(t.current)},[o]),v.jsx(y.textarea,{...s,ref:P(a,t)})});u.displayName="FieldTextarea";const{withContext:T,PropsProvider:F}=x({key:"textarea"}),k=T(u);export{k as T};