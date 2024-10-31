import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-BTWVzub6.js";import{ae as h}from"./index-eN0ELeIH.js";import{f as d,a as i}from"./typography-Ce5Admmz.js";import{B as n}from"./box-CwIaBbUI.js";import{c as p}from"./colors-BRrPfCdD.js";import{H as l}from"./heading-05dRngNe.js";import{F as f}from"./flex-v5DFvFs4.js";import{V as a}from"./v-stack-D7XFool3.js";import{T as s}from"./text-D14Jyc6W.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BjjkCpBY.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config-B2siLCbt.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-Dk7VeZ_r.js";import"./use-theme-CeOC8r1f.js";import"./cx-BDMMs1jM.js";import"./stack-BdCvkUuU.js";import"./responsive-CwLgsqRj.js";import"./children-2ZXUntH3.js";const g=o=>o.charAt(0).toUpperCase()+o.slice(1),j=(o,e)=>{if(typeof e=="string"){const t=e;return r.jsxs(a,{alignItems:"flex-start",spacing:"4px",borderRadius:"6px",border:`1px solid ${p.gray[100]}`,w:92,children:[r.jsx(n,{backgroundColor:t,height:"60px",width:"100%"}),r.jsx(s,{fontWeight:d.bold,fontSize:i.sm,paddingLeft:"6px",children:o}),r.jsx(s,{fontSize:i.xs,paddingLeft:"6px",children:t})]})}return Object.entries(e).map(([t,m])=>r.jsxs(a,{alignItems:"flex-start",spacing:"2px",borderRadius:"6px",border:`1px solid ${p.gray[100]}`,w:92,children:[r.jsx(n,{backgroundColor:m,height:"60px",width:"100%"}),r.jsx(s,{fontWeight:d.bold,wordBreak:"break-word",fontSize:i.sm,paddingLeft:"6px",children:`${o}-${t}`}),r.jsx(s,{fontSize:i.xs,paddingLeft:"6px",children:m})]},t))},b=()=>r.jsx(n,{marginBottom:"40px",children:Object.entries(p).map(([o,e])=>r.jsxs(n,{marginTop:"20px",children:[r.jsx(l,{size:"md",as:"h3",id:o,children:g(o)}),r.jsx(f,{gap:"8px",flexWrap:"wrap",children:j(o,e)})]},o))});function x(o){const e={a:"a",br:"br",code:"code",h2:"h2",p:"p",...c(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(h,{title:"Komponenter/Tokens/Farger"}),`
`,r.jsx(e.h2,{id:"farger",children:"Farger"}),`
`,r.jsxs(e.p,{children:["Fargene brukes som CSS-variabler på følgende måte: ",r.jsx(e.code,{children:"var(--kvib-colors-green-500)"}),".",r.jsx(e.br,{}),`
`,"I komponenter, bruk ",r.jsx(e.code,{children:"useTheme"})," hook og sett farger slik: ",r.jsx(e.code,{children:"backgroundColor={theme.colors.green[500]}"}),"se eksempel ",r.jsx(e.a,{href:"/docs/hooks-usetheme--docs",children:"her"}),"."]}),`
`,r.jsx(b,{})]})}function or(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(x,{...o})}):x(o)}export{or as default};
