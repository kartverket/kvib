import{j as t}from"./jsx-runtime-DQFEoQHt.js";import{useMDXComponents as m}from"./index-DQ9BjFnV.js";import"./chunk-NUUEMKO5-CJ72SnpC.js";import{ae as x}from"./index-CSWk4Gvv.js";import{u as h}from"./factory-C_AV5G8T.js";import{T as u,a as j,b as c,d as a,e as g}from"./table-B_IQCDKb.js";import{B as f}from"./box-enNWkFiM.js";import"./index-CbFAwPTn.js";import"./iframe-C9P60tNT.js";import"../sb-preview/runtime.js";import"./react-18-DdqO7fqk.js";import"./index-CqJK9h7E.js";import"./index-Crg4-8o8.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./create-slot-recipe-context-CBrPPoLh.js";import"./empty-DSVal0bC.js";const b=e=>t.jsx(f,{bg:"blue.400",w:e,h:"16px"}),C=()=>{const s=h().tokens,p=s.getCategoryValues("spacing"),d=Object.entries(p).filter(r=>{const o=r[0],n=parseFloat(o);return!isNaN(n)&&n>=0}).sort((r,o)=>{const n=parseFloat(r[0]),i=parseFloat(o[0]);return n-i});return t.jsxs(u,{width:"100%",children:[t.jsx(j,{textAlign:"left",children:t.jsxs(c,{children:[t.jsx(a,{width:"40%",children:"Eksempel"}),t.jsx(a,{width:"30%",children:"Verdi"})]})}),t.jsx(g,{children:d.map(r=>{var i;const o=r[0],n=(i=s.getByName(`spacing.${o}`))==null?void 0:i.originalValue;return t.jsxs(c,{children:[t.jsx(a,{backgroundColor:"white",children:b(o)}),t.jsx(a,{backgroundColor:"white",children:`${o} / ${n}`})]},o)})})]})};function l(e){const s={h2:"h2",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Komponenter/Tokens/Spacing"}),`
`,t.jsx(s.h2,{id:"spacing",children:"Spacing"}),`
`,t.jsx(C,{})]})}function A(e={}){const{wrapper:s}={...m(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(l,{...e})}):l(e)}export{A as default};
