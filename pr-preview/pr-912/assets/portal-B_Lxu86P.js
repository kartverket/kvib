import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{A as f,l}from"./index-C5caIrke.js";import{r as s}from"./index-CcKhGcwW.js";import{r as x}from"./index-DI5DFbIx.js";import{u as g}from"./use-environment-context-DqdFjJyw.js";const R=t=>{var a;const{children:o,disabled:e}=t,[c,i]=s.useState((a=t.container)==null?void 0:a.current),m=s.useSyncExternalStore(N,()=>!1,()=>!0),{getRootNode:u}=g();if(s.useEffect(()=>{i(()=>{var r;return(r=t.container)==null?void 0:r.current})},[t.container]),m||e)return n.jsx(n.Fragment,{children:o});const d=c??E(u);return n.jsx(n.Fragment,{children:s.Children.map(o,r=>x.createPortal(r,d))})},E=t=>{const o=t==null?void 0:t(),e=o.getRootNode();return f(e)?e:l(o).body},N=()=>()=>{};export{R as P};
