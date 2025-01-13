import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{useMDXComponents as x}from"./index-DQ9BjFnV.js";import"./chunk-NUUEMKO5-sWGPIdxw.js";import{ae as j}from"./index-C0bnPwG7.js";import{s as m,t as p}from"./index-DyEURmN4.js";import{K as u}from"./Kodeeksempel-BLSCVgql.js";import{u as k}from"./factory-C_AV5G8T.js";import{T as a,a as l,b as n,d as t,e as d}from"./table-B_IQCDKb.js";import{F as c}from"./flex-B6LzrYc1.js";import{C as b}from"./code-C7Shch1Q.js";import{T as g}from"./text-sMekb8FJ.js";import"./index-CbFAwPTn.js";import"./iframe-RtV34LTt.js";import"../sb-preview/runtime.js";import"./react-18-DdqO7fqk.js";import"./index-CqJK9h7E.js";import"./index-Crg4-8o8.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-BVPtv_lZ.js";import"./create-recipe-context-BJGsumvR.js";import"./empty-DSVal0bC.js";import"./grid-C9LqfPmh.js";import"./use-event-DBF3Ked7.js";import"./create-context-Cnn4BppQ.js";import"./factory-YvB-AF3-.js";import"./walk-object-2Xl5z3JH.js";import"./create-split-props-L-tVc3XO.js";import"./editable-CzOn4N4i.js";import"./create-slot-recipe-context-CBrPPoLh.js";import"./use-environment-context-ekjyci6u.js";import"./use-field-context-DguIDVI7.js";import"./fieldset-DBNWSO0W.js";import"./tabs-w1z1Boot.js";import"./aspect-ratio-Y0y4qFt-.js";import"./badge-DAWK_bfl.js";import"./bleed-BQpq41fx.js";import"./box-enNWkFiM.js";import"./card-641aoCZa.js";import"./center-t5QQ6XAV.js";import"./container-B2trJtWH.js";import"./float-DkG2t2Rc.js";import"./highlight-B1i-K0Nr.js";import"./grid-item-Cn0KX9Xz.js";import"./simple-grid-DzGsjFz8.js";import"./image-BajOZyTZ.js";import"./kbd-ioGaoUw0.js";import"./link-box-1ZHhZhF1.js";import"./separator-CeD7UzOc.js";import"./skip-nav-link-BknBF1pi.js";import"./spinner-f8I0xFVE.js";import"./stack-BAqUyaXt.js";import"./textarea-Bl3OFlZv.js";import"./heading-DSKY1IBf.js";import"./visually-hidden-b-_guvqp.js";import"./portal-DyfuXM0a.js";const C=()=>{const i=k().breakpoints;return e.jsxs(e.Fragment,{children:[e.jsxs(a,{width:"100%",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(n,{children:[e.jsx(t,{width:"20%",children:"Navn"}),e.jsx(t,{width:"50%",children:"Verdi"}),e.jsx(t,{width:"30%",children:"Bruk"})]})}),e.jsx(d,{children:i.values.map(r=>e.jsxs(n,{children:[e.jsx(t,{backgroundColor:"white",children:r.name}),e.jsx(t,{backgroundColor:"white",children:r.min}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(c,{gap:"1rem",justifyContent:"space-between",children:[e.jsx(b,{children:`breakpoints.${r.name}`}),e.jsx(m,{value:`breakpoints.${r.name}`,children:e.jsx(p,{})})]})})]},r.name))})]}),e.jsx(g,{as:"h2",fontSize:"lg",fontWeight:700,mt:"2rem",children:"Breakpoint-betingelser"}),e.jsx(u,{beskrivelse:`
        For å gjøre det enklere å hente ut breakpoint-betingelser tilbyr Kvib støttefunksjonen getBreakpointCondition() som tar systemet man bruker og navnet på et breakpoint som argument og returnerer en media query i CSS. Nyttig i kombinasjon med useMediaQuery-hooken.
      `,kildekode:`
const system = useKvibContext();
const isTablet = useMediaQuery(getBreakpointCondition(system, "mdToLg"));
console.log(isTablet); // true hvis skjermstørrelsen er mellom md og lg
`}),e.jsxs(a,{width:"100%",marginTop:"2rem",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(n,{children:[e.jsx(t,{width:"20%",children:"Betingelse"}),e.jsx(t,{width:"80%",children:"Media Query"})]})}),e.jsx(d,{children:Object.entries(i.conditions).map(([r,s])=>e.jsxs(n,{children:[e.jsx(t,{backgroundColor:"white",children:r}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(c,{gap:"1rem",justifyContent:"space-between",alignItems:"center",children:[s,e.jsx(m,{value:s,children:e.jsx(p,{})})]})})]},r))})]})]})};function h(o){const i={h2:"h2",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Komponenter/Tokens/Breakpoints"}),`
`,e.jsx(i.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(C,{})]})}function ye(o={}){const{wrapper:i}={...x(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(h,{...o})}):h(o)}export{ye as default};
