import{j as r}from"./jsx-runtime-CQsLhzk5.js";import{r as n}from"./index-Wp2u197Z.js";import{a as p,c as A}from"./factory-DbxLU_Fv.js";import{c as f}from"./create-slot-recipe-context-Ct7AJ-u_.js";import{I as a,W as c,b as x}from"./icons-C5Y4X3wc.js";const[C,v]=p({name:"AlertStatusContext",hookName:"useAlertStatusContext",providerName:"<Alert />"}),{withProvider:h,withContext:e,useStyles:I,PropsProvider:P}=f({key:"alert"}),R=h("div","root",{forwardAsChild:!0,wrapElement(s,t){return r.jsx(C,{value:{status:t.status||"info"},children:s})}}),E=e("div","title"),b=e("div","description"),N=e("div","content"),S={info:a,warning:c,success:x,error:c,neutral:a},W=n.forwardRef(function(t,i){const o=v(),l=I(),u=typeof o.status=="string"?S[o.status]:n.Fragment,{children:d=r.jsx(u,{}),...m}=t;return r.jsx(A.span,{ref:i,...m,css:[l.indicator,t.css],children:d})});export{R as A,W as a,N as b,E as c,b as d};
