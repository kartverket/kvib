import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-C5NA0Yni.js";import{ae as h}from"./index-Dg9HuLTC.js";import{f as d,a as i}from"./typography-Ce5Admmz.js";import{B as n}from"./box-DeqT4ixr.js";import{c as p}from"./colors-BRrPfCdD.js";import{H as l}from"./heading--NES2npU.js";import{F as f}from"./flex-C1gIBb6o.js";import{V as a}from"./v-stack-BfMi40Xh.js";import{T as s}from"./text-ByHKaHOl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B017mw6k.js";import"../sb-preview/runtime.js";import"./react-18-CXIcm_DL.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config-YUvqttAg.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-gaHRB8Pq.js";import"./use-theme-CBfqdygA.js";import"./cx-BDMMs1jM.js";import"./stack-REYSnkee.js";import"./responsive-BNzRyFLh.js";import"./children-2ZXUntH3.js";const g=e=>e.charAt(0).toUpperCase()+e.slice(1),j=(e,o)=>{if(typeof o=="string"){const t=o;return r.jsxs(a,{alignItems:"flex-start",spacing:"4px",borderRadius:"6px",border:`1px solid ${p.gray[100]}`,w:92,children:[r.jsx(n,{backgroundColor:t,height:"60px",width:"100%"}),r.jsx(s,{fontWeight:d.bold,fontSize:i.sm,paddingLeft:"6px",children:e}),r.jsx(s,{fontSize:i.xs,paddingLeft:"6px",children:t})]})}return Object.entries(o).map(([t,m])=>r.jsxs(a,{alignItems:"flex-start",spacing:"2px",borderRadius:"6px",border:`1px solid ${p.gray[100]}`,w:92,children:[r.jsx(n,{backgroundColor:m,height:"60px",width:"100%"}),r.jsx(s,{fontWeight:d.bold,wordBreak:"break-word",fontSize:i.sm,paddingLeft:"6px",children:`${e}-${t}`}),r.jsx(s,{fontSize:i.xs,paddingLeft:"6px",children:m})]},t))},u=()=>r.jsx(n,{marginBottom:"40px",children:Object.entries(p).map(([e,o])=>r.jsxs(n,{marginTop:"20px",children:[r.jsx(l,{size:"md",as:"h3",id:e,children:g(e)}),r.jsx(f,{gap:"8px",flexWrap:"wrap",children:j(e,o)})]},e))});function x(e){const o={a:"a",br:"br",code:"code",h2:"h2",p:"p",...c(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(h,{title:"Designfundament/Farger"}),`
`,r.jsx(o.h2,{id:"farger",children:"Farger"}),`
`,r.jsxs(o.p,{children:["Fargene brukes som CSS-variabler på følgende måte: ",r.jsx(o.code,{children:"var(--kvib-colors-green-500)"}),".",r.jsx(o.br,{}),`
`,"I komponenter, bruk ",r.jsx(o.code,{children:"useTheme"})," hook og sett farger slik: ",r.jsx(o.code,{children:"backgroundColor={theme.colors.green[500]}"}),"se eksempel ",r.jsx(o.a,{href:"/docs/hooks-usetheme--docs",children:"her"}),"."]}),`
`,r.jsx(u,{})]})}function rr(e={}){const{wrapper:o}={...c(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(x,{...e})}):x(e)}export{rr as default};
