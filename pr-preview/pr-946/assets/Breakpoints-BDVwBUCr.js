import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{useMDXComponents as x}from"./index-BGZZYR5m.js";import"./chunk-NUUEMKO5-C8gYH1CI.js";import{ae as j}from"./index-2k8oj4go.js";import{s as m,t as p}from"./index-CoJY4uhr.js";import{K as u}from"./Kodeeksempel-DpjBHbTj.js";import{u as k}from"./factory-X12ZEw24.js";import{T as a,a as l,b as n,d as t,e as d}from"./table-DSaLZh49.js";import{F as c}from"./flex-BM20q-lB.js";import{C as b}from"./code-Byz3bxpg.js";import{T as g}from"./text-CO7rLojD.js";import"./index-C7I6S4tq.js";import"./iframe-BpqwnhZD.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-EN4ZLXvn.js";import"./index-DGxgJC0M.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-HLUy-D3P.js";import"./create-recipe-context-CAgtZ_aE.js";import"./empty-DSVal0bC.js";import"./grid-Pos4YUij.js";import"./use-event-sZopjRGC.js";import"./create-context-rrX1Jm6N.js";import"./factory-C0bPybxC.js";import"./walk-object-Ct_lkoEm.js";import"./create-split-props-L-tVc3XO.js";import"./editable-D1zuwc7o.js";import"./create-slot-recipe-context-CUpEp5dt.js";import"./use-environment-context-BNO5zKCi.js";import"./use-field-context-B1YCNrrl.js";import"./fieldset-Cg8gXsUZ.js";import"./tabs-JycFvS-P.js";import"./aspect-ratio-pADKN6nH.js";import"./badge-xSKWg_M8.js";import"./bleed-CYt0VWpp.js";import"./box-Cm05xU0f.js";import"./card-j9fhE5Dj.js";import"./center-CRmuswWq.js";import"./container-Bzta5xSJ.js";import"./float-Ddto1wVD.js";import"./highlight-ChZ2uKF0.js";import"./grid-item-Cd4HGiya.js";import"./simple-grid-YGr4e-fX.js";import"./image-DfK4wNKE.js";import"./kbd-mgwTwfVB.js";import"./link-box-DRNCg9NM.js";import"./separator-h_vB7cim.js";import"./skip-nav-link-CPg7LKM1.js";import"./spinner-ByhJ2vKD.js";import"./stack-B6Ug3qu1.js";import"./textarea-PZbMMvdQ.js";import"./heading-DgtS3TKy.js";import"./visually-hidden-D4okpjrR.js";import"./portal-LOkWSXUb.js";const C=()=>{const i=k().breakpoints;return e.jsxs(e.Fragment,{children:[e.jsxs(a,{width:"100%",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(n,{children:[e.jsx(t,{width:"20%",children:"Navn"}),e.jsx(t,{width:"50%",children:"Verdi"}),e.jsx(t,{width:"30%",children:"Bruk"})]})}),e.jsx(d,{children:i.values.map(r=>e.jsxs(n,{children:[e.jsx(t,{backgroundColor:"white",children:r.name}),e.jsx(t,{backgroundColor:"white",children:r.min}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(c,{gap:"1rem",justifyContent:"space-between",children:[e.jsx(b,{children:`breakpoints.${r.name}`}),e.jsx(m,{value:`breakpoints.${r.name}`,children:e.jsx(p,{})})]})})]},r.name))})]}),e.jsx(g,{as:"h2",fontSize:"lg",fontWeight:700,mt:"2rem",children:"Breakpoint-betingelser"}),e.jsx(u,{beskrivelse:`
        For å gjøre det enklere å hente ut breakpoint-betingelser tilbyr Kvib støttefunksjonen getBreakpointCondition() som tar systemet man bruker og navnet på et breakpoint som argument og returnerer en media query i CSS. Nyttig i kombinasjon med useMediaQuery-hooken.
      `,kildekode:`
const system = useKvibContext();
const isTablet = useMediaQuery(getBreakpointCondition(system, "mdToLg"));
console.log(isTablet); // true hvis skjermstørrelsen er mellom md og lg
`}),e.jsxs(a,{width:"100%",marginTop:"2rem",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(n,{children:[e.jsx(t,{width:"20%",children:"Betingelse"}),e.jsx(t,{width:"80%",children:"Media Query"})]})}),e.jsx(d,{children:Object.entries(i.conditions).map(([r,s])=>e.jsxs(n,{children:[e.jsx(t,{backgroundColor:"white",children:r}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(c,{gap:"1rem",justifyContent:"space-between",alignItems:"center",children:[s,e.jsx(m,{value:s,children:e.jsx(p,{})})]})})]},r))})]})]})};function h(o){const i={h2:"h2",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Komponenter/Tokens/Breakpoints"}),`
`,e.jsx(i.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(C,{})]})}function ye(o={}){const{wrapper:i}={...x(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(h,{...o})}):h(o)}export{ye as default};
