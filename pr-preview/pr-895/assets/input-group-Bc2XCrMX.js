import{j as u}from"./extends-CwFRzn3r.js";import{r as m}from"./index-BwDkhjyp.js";import{f as I}from"./forward-ref-BWI-Phbn.js";import{a as h,o as x}from"./use-style-config-C4sZEIFb.js";import{a as E,c as S}from"./factory-lWLPzty5.js";import{c as v}from"./context-CBKykClo.js";import{c as G}from"./cx-BDMMs1jM.js";import{g as R}from"./children-2ZXUntH3.js";const[j,P]=v({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),C=I(function(o,d){const n=h("Input",o),{children:c,className:f,...l}=x(o),g=G("chakra-input__group",f),r={},s=R(c),e=n.field;s.forEach(t=>{n&&(e&&t.type.id==="InputLeftElement"&&(r.paddingStart=e.height??e.h),e&&t.type.id==="InputRightElement"&&(r.paddingEnd=e.height??e.h),t.type.id==="InputRightAddon"&&(r.borderEndRadius=0),t.type.id==="InputLeftAddon"&&(r.borderStartRadius=0))});const y=s.map(t=>{var i,p;const a=E({size:((i=t.props)==null?void 0:i.size)||o.size,variant:((p=t.props)==null?void 0:p.variant)||o.variant});return t.type.id!=="Input"?m.cloneElement(t,a):m.cloneElement(t,Object.assign(a,r,t.props))});return u.jsx(S.div,{className:g,ref:d,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...n.group},"data-group":!0,...l,children:u.jsx(j,{value:n,children:y})})});C.displayName="InputGroup";export{C as I,P as u};
