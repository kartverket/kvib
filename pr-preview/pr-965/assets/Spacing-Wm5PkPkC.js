import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{useMDXComponents as m}from"./index-BGZZYR5m.js";import"./chunk-NUUEMKO5-15bDvcSY.js";import{ae as x}from"./index-4n2OH8tb.js";import{u as h}from"./factory-X12ZEw24.js";import{T as u,a as j,b as c,d as a,e as g}from"./table-DSaLZh49.js";import{B as f}from"./box-Cm05xU0f.js";import"./index-C7I6S4tq.js";import"./iframe-C0zz-mbi.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-EN4ZLXvn.js";import"./index-DGxgJC0M.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./create-slot-recipe-context-CUpEp5dt.js";import"./empty-DSVal0bC.js";const b=e=>t.jsx(f,{bg:"blue.400",w:e,h:"16px"}),C=()=>{const s=h().tokens,p=s.getCategoryValues("spacing"),d=Object.entries(p).filter(r=>{const o=r[0],n=parseFloat(o);return!isNaN(n)&&n>=0}).sort((r,o)=>{const n=parseFloat(r[0]),i=parseFloat(o[0]);return n-i});return t.jsxs(u,{width:"100%",children:[t.jsx(j,{textAlign:"left",children:t.jsxs(c,{children:[t.jsx(a,{width:"40%",children:"Eksempel"}),t.jsx(a,{width:"30%",children:"Verdi"})]})}),t.jsx(g,{children:d.map(r=>{var i;const o=r[0],n=(i=s.getByName(`spacing.${o}`))==null?void 0:i.originalValue;return t.jsxs(c,{children:[t.jsx(a,{backgroundColor:"white",children:b(o)}),t.jsx(a,{backgroundColor:"white",children:`${o} / ${n}`})]},o)})})]})};function l(e){const s={h2:"h2",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Komponenter/Tokens/Spacing"}),`
`,t.jsx(s.h2,{id:"spacing",children:"Spacing"}),`
`,t.jsx(C,{})]})}function A(e={}){const{wrapper:s}={...m(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(l,{...e})}):l(e)}export{A as default};
