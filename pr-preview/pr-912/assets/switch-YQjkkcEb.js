import{j as c}from"./jsx-runtime-sfY7k0Xq.js";import{r as n}from"./index-CcKhGcwW.js";import{c as y}from"./create-slot-recipe-context-CYF_0Bn9.js";import{c as p}from"./factory-Dr_T95xI.js";import{d as w}from"./attr-C3Jtgmrz.js";import{c as j}from"./create-context-DPShtm6F.js";import{c as S}from"./create-split-props-u5h9OPvL.js";import{a as i}from"./factory-C6a3rcZ4.js";import{z as d}from"./index-CxfNaWX6.js";import{u as I,n as N}from"./index-C4pvfroP.js";import{m as A,c as T}from"./index-BMwn0llW.js";import{u as L}from"./use-environment-context-DqdFjJyw.js";import{u as $}from"./use-locale-context-CnLnjqE7.js";import{u as E}from"./use-event-CSfbiBcH.js";import{u as f}from"./use-field-context-CcEUgBGI.js";const[C,h]=j({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),x=n.forwardRef((e,o)=>{const r=h(),t=d(r.getControlProps(),e);return c.jsx(i.span,{...t,ref:o})});x.displayName="SwitchControl";const b=n.forwardRef((e,o)=>{const r=h(),t=d(r.getHiddenInputProps(),e),s=f();return c.jsx(i.input,{"aria-describedby":s==null?void 0:s.ariaDescribedby,...t,ref:o})});b.displayName="SwitchHiddenInput";const P=n.forwardRef((e,o)=>{const r=h(),t=d(r.getLabelProps(),e);return c.jsx(i.span,{...t,ref:o})});P.displayName="SwitchLabel";const H=(e={})=>{const{getRootNode:o}=L(),{dir:r}=$(),t=f(),s={id:n.useId(),ids:{label:t==null?void 0:t.ids.label,hiddenInput:t==null?void 0:t.ids.control},dir:r,disabled:t==null?void 0:t.disabled,readOnly:t==null?void 0:t.readOnly,invalid:t==null?void 0:t.invalid,required:t==null?void 0:t.required,getRootNode:o,checked:e.defaultChecked,...e},a={...s,checked:e.checked,onCheckedChange:E(e.onCheckedChange,{sync:!0})},[l,m]=I(A(s),{context:a});return T(l,m,N)},k=n.forwardRef((e,o)=>{const[r,t]=S()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),s=H(r),a=d(s.getRootProps(),t);return c.jsx(C,{value:s,children:c.jsx(i.label,{...a,ref:o})})});k.displayName="SwitchRoot";const R=n.forwardRef((e,o)=>{const[{value:r},t]=S()(e,["value"]),s=d(r.getRootProps(),t);return c.jsx(C,{value:r,children:c.jsx(i.label,{...s,ref:o})})});R.displayName="SwitchRootProvider";const g=n.forwardRef((e,o)=>{const r=h(),t=d(r.getThumbProps(),e);return c.jsx(i.span,{...t,ref:o})});g.displayName="SwitchThumb";const{withProvider:v,withContext:u,useStyles:q,PropsProvider:Z}=y({key:"switch"});v(R,"root",{forwardAsChild:!0});const _=v(k,"root",{forwardAsChild:!0}),tt=u(P,"label",{forwardAsChild:!0}),et=u(x,"control",{forwardAsChild:!0}),ot=u(g,"thumb",{forwardAsChild:!0}),rt=n.forwardRef(function(o,r){const t=h(),s=q(),{fallback:a,children:l,...m}=o;return c.jsx(p.span,{ref:r,"data-checked":w(t.checked),...m,css:[s.indicator,o.css],children:t.checked?l:a})}),st=n.forwardRef(function(o,r){const t=h(),{fallback:s,children:a,...l}=o;return c.jsx(p.span,{ref:r,"data-checked":w(t.checked),...l,children:t.checked?a:s})}),ct=b;export{_ as S,ct as a,et as b,ot as c,st as d,rt as e,tt as f};
