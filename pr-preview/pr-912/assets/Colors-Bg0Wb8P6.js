import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as l}from"./index-BRkUXrbv.js";import"./chunk-NUUEMKO5-4YeVwFvD.js";import{ae as c}from"./index-CgiBEKmz.js";import{B as n}from"./box-C9nK2UO9.js";import{c as a}from"./colors-DLx86jGi.js";import{H as h}from"./heading-D7346gVA.js";import{F as f}from"./flex-DKwYg45R.js";import{V as d}from"./v-stack-bWf0p04U.js";import{T as i}from"./text-DJW8V014.js";import{f as m,a as s}from"./typography-DCWcVkge.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BDF9EN4o.js";import"../sb-preview/runtime.js";import"./react-18-ChRDcVY1.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./factory-Dr_T95xI.js";import"./create-recipe-context-AlCFSakd.js";import"./empty-DSVal0bC.js";import"./use-recipe-CWoigbDD.js";import"./stack-Bh3oWNRR.js";import"./walk-object-MOVJDcbI.js";import"./is-D1VN0Vzs.js";const g=r=>r.charAt(0).toUpperCase()+r.slice(1),u=(r,o)=>{if("value"in o){const t=o;return e.jsxs(d,{alignItems:"flex-start",gap:"4px",borderRadius:"6px",border:`1px solid ${a.gray[100]}`,w:92,children:[e.jsx(n,{backgroundColor:t.value,height:"60px",width:"100%"}),e.jsx(i,{fontWeight:m.bold.value,fontSize:s.sm.value,paddingLeft:"6px",children:r}),e.jsx(i,{fontSize:s.xs.value,paddingLeft:"6px",children:t.value})]})}return Object.entries(o).map(([t,p])=>e.jsxs(d,{alignItems:"flex-start",gap:"2px",borderRadius:"6px",border:`1px solid ${a.gray[100]}`,w:92,children:[e.jsx(n,{backgroundColor:p.value,height:"60px",width:"100%"}),e.jsx(i,{fontWeight:m.bold.value,wordBreak:"break-word",fontSize:s.sm.value,paddingLeft:"6px",children:`${r}-${t}`}),e.jsx(i,{fontSize:s.xs.value,paddingLeft:"6px",children:p.value})]},t))},j=()=>e.jsx(n,{marginBottom:"40px",children:Object.entries(a).map(([r,o])=>e.jsxs(n,{marginTop:"20px",children:[e.jsx(h,{size:"md",as:"h3",id:r,children:g(r)}),e.jsx(f,{gap:"8px",flexWrap:"wrap",children:u(r,o)})]},r))});function x(r){const o={a:"a",br:"br",code:"code",h2:"h2",p:"p",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Komponenter/Tokens/Farger"}),`
`,e.jsx(o.h2,{id:"farger",children:"Farger"}),`
`,e.jsxs(o.p,{children:["Fargene brukes som CSS-variabler på følgende måte: ",e.jsx(o.code,{children:"var(--kvib-colors-green-500)"}),".",e.jsx(o.br,{}),`
`,"I komponenter, bruk ",e.jsx(o.code,{children:"useTheme"})," hook og sett farger slik: ",e.jsx(o.code,{children:"backgroundColor={theme.colors.green[500]}"}),"se eksempel ",e.jsx(o.a,{href:"/docs/hooks-usetheme--docs",children:"her"}),"."]}),`
`,e.jsx(j,{})]})}function q(r={}){const{wrapper:o}={...l(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(x,{...r})}):x(r)}export{q as default};