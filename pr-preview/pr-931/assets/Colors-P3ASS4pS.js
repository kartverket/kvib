import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as c}from"./index-BGZZYR5m.js";import"./chunk-NUUEMKO5-CTU7A26n.js";import{ae as h}from"./index-DgVuNGzt.js";import{B as i,bR as a,z as m,F as g,V as p,T as s,bS as x,bT as n}from"./index-DmZmBakc.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-ClWrqb5m.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const u=r=>r.charAt(0).toUpperCase()+r.slice(1),j=(r,o)=>{if("value"in o){const t=o;return e.jsxs(p,{alignItems:"flex-start",gap:"4px",borderRadius:"6px",border:`1px solid ${a.gray[100]}`,w:92,children:[e.jsx(i,{backgroundColor:t.value,height:"60px",width:"100%"}),e.jsx(s,{fontWeight:x.bold.value,fontSize:n.sm.value,paddingLeft:"6px",children:r}),e.jsx(s,{fontSize:n.xs.value,paddingLeft:"6px",children:t.value})]})}return Object.entries(o).map(([t,d])=>e.jsxs(p,{alignItems:"flex-start",gap:"2px",borderRadius:"6px",border:`1px solid ${a.gray[100]}`,w:92,children:[e.jsx(i,{backgroundColor:d.value,height:"60px",width:"100%"}),e.jsx(s,{fontWeight:x.bold.value,wordBreak:"break-word",fontSize:n.sm.value,paddingLeft:"6px",children:`${r}-${t}`}),e.jsx(s,{fontSize:n.xs.value,paddingLeft:"6px",children:d.value})]},t))},f=()=>e.jsx(i,{marginBottom:"40px",children:Object.entries(a).map(([r,o])=>e.jsxs(i,{marginTop:"20px",children:[e.jsx(m,{size:"md",as:"h3",id:r,children:u(r)}),e.jsx(g,{gap:"8px",flexWrap:"wrap",children:j(r,o)})]},r))});function l(r){const o={a:"a",br:"br",code:"code",h2:"h2",p:"p",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Komponenter/Tokens/Farger"}),`
`,e.jsx(o.h2,{id:"farger",children:"Farger"}),`
`,e.jsxs(o.p,{children:["Fargene brukes som CSS-variabler på følgende måte: ",e.jsx(o.code,{children:"var(--kvib-colors-green-500)"}),".",e.jsx(o.br,{}),`
`,"I komponenter, bruk ",e.jsx(o.code,{children:"useTheme"})," hook og sett farger slik: ",e.jsx(o.code,{children:"backgroundColor={theme.colors.green[500]}"}),"se eksempel ",e.jsx(o.a,{href:"/docs/hooks-usetheme--docs",children:"her"}),"."]}),`
`,e.jsx(f,{})]})}function R(r={}){const{wrapper:o}={...c(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(l,{...r})}):l(r)}export{R as default};