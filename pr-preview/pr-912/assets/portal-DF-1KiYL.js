import{j as n}from"./jsx-runtime-CQsLhzk5.js";import{a3 as f,a4 as l,N as x}from"./create-slot-recipe-context-BTQZ2sOO.js";import{r as s}from"./index-Wp2u197Z.js";import{r as g}from"./index-C2tM1_0x.js";const R=t=>{var a;const{children:e,disabled:o}=t,[c,i]=s.useState((a=t.container)==null?void 0:a.current),m=s.useSyncExternalStore(N,()=>!1,()=>!0),{getRootNode:u}=f();if(s.useEffect(()=>{i(()=>{var r;return(r=t.container)==null?void 0:r.current})},[t.container]),m||o)return n.jsx(n.Fragment,{children:e});const d=c??E(u);return n.jsx(n.Fragment,{children:s.Children.map(e,r=>g.createPortal(r,d))})},E=t=>{const e=t==null?void 0:t(),o=e.getRootNode();return l(o)?o:x(e).body},N=()=>()=>{};export{R as P};
