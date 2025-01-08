import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{useMDXComponents as l}from"./index-BGZZYR5m.js";import"./chunk-NUUEMKO5-CPo2JPy5.js";import{ae as c}from"./index-D9nSQZEG.js";import{bD as m,b7 as a,bE as d,bF as i}from"./index-CRrqj8Jn.js";import{B as s}from"./box-Bmov6X-Z.js";import{H as h}from"./heading-c0bs7S-P.js";import{F as g}from"./flex-BzzyrBhv.js";import{T as p}from"./text-Dwwg-e87.js";import"./index-C7I6S4tq.js";import"./iframe-B2aS7idJ.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-EN4ZLXvn.js";import"./index-DGxgJC0M.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-6Bgnn7vh.js";import"./factory-CpD2hwoa.js";import"./create-recipe-context-BAHgkp5l.js";import"./empty-DSVal0bC.js";import"./use-recipe-CYrRhjTN.js";import"./grid-ssdSjSnm.js";import"./use-event-DluRpvc7.js";import"./create-context-B_OvqDKw.js";import"./factory-C8pPPz6n.js";import"./walk-object-Ct_lkoEm.js";import"./create-split-props-L-tVc3XO.js";import"./editable-BymdoWyO.js";import"./create-slot-recipe-context-KvBbDfRP.js";import"./use-environment-context-CwI7sxJj.js";import"./use-field-context-B739sAKC.js";import"./fieldset-7O9opABx.js";import"./tabs-D3FBrevG.js";import"./aspect-ratio-BDUPmLpt.js";import"./badge-CiIWorhQ.js";import"./bleed-Be2diQ6W.js";import"./card-MKiKGmSR.js";import"./center-BjTi-jDO.js";import"./code-DB9a5aB3.js";import"./container-CPeF9f1M.js";import"./float-BUxgzbw7.js";import"./highlight-C9lHo1pP.js";import"./grid-item-CQ9trW14.js";import"./simple-grid-BKKqsyC0.js";import"./image-BxPC7XNr.js";import"./kbd-BL1YlofU.js";import"./separator-gkbq4TJY.js";import"./skip-nav-link-D46LELhs.js";import"./spinner-DLHOy98U.js";import"./stack-DR__wOga.js";import"./table-B-PQpmxl.js";import"./textarea-CD5y-Dey.js";import"./portal-BqskmCPs.js";const f=o=>o.charAt(0).toUpperCase()+o.slice(1),u=(o,t)=>{if("value"in t){const e=t;return r.jsxs(a,{alignItems:"flex-start",gap:"4px",borderRadius:"6px",border:`1px solid ${m.gray[100]}`,w:92,children:[r.jsx(s,{backgroundColor:e.value,height:"60px",width:"100%"}),r.jsx(p,{fontWeight:d.bold.value,fontSize:i.sm.value,paddingLeft:"6px",children:o}),r.jsx(p,{fontSize:i.xs.value,paddingLeft:"6px",children:e.value})]})}return Object.entries(t).map(([e,n])=>r.jsxs(a,{alignItems:"flex-start",gap:"2px",borderRadius:"6px",border:`1px solid ${m.gray[100]}`,w:92,children:[r.jsx(s,{backgroundColor:n.value,height:"60px",width:"100%"}),r.jsx(p,{fontWeight:d.bold.value,wordBreak:"break-word",fontSize:i.sm.value,paddingLeft:"6px",children:`${o}-${e}`}),r.jsx(p,{fontSize:i.xs.value,paddingLeft:"6px",children:n.value})]},e))},j=()=>r.jsx(s,{marginBottom:"40px",children:Object.entries(m).map(([o,t])=>r.jsxs(s,{marginTop:"20px",children:[r.jsx(h,{size:"md",as:"h3",id:o,children:f(o)}),r.jsx(g,{gap:"8px",flexWrap:"wrap",children:u(o,t)})]},o))});function x(o){const t={a:"a",br:"br",code:"code",h2:"h2",p:"p",...l(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(c,{title:"Komponenter/Tokens/Farger"}),`
`,r.jsx(t.h2,{id:"farger",children:"Farger"}),`
`,r.jsxs(t.p,{children:["Fargene brukes som CSS-variabler på følgende måte: ",r.jsx(t.code,{children:"var(--kvib-colors-green-500)"}),".",r.jsx(t.br,{}),`
`,"I komponenter, bruk ",r.jsx(t.code,{children:"useTheme"})," hook og sett farger slik: ",r.jsx(t.code,{children:"backgroundColor={theme.colors.green[500]}"}),"se eksempel ",r.jsx(t.a,{href:"/docs/hooks-usetheme--docs",children:"her"}),"."]}),`
`,r.jsx(j,{})]})}function br(o={}){const{wrapper:t}={...l(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(x,{...o})}):x(o)}export{br as default};
