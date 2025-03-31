import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as x}from"./index-CfoPgG5w.js";import"./index-BTWvrcS2.js";import{s as m,t as p}from"./index-BYbB6rBR.js";import{K as j}from"./Kodeeksempel-FWWdk2GL.js";import{u}from"./factory-BXJ64pFW.js";import{T as a,a as l,b as n,e as t,d}from"./table-DG-yNa5d.js";import{F as c}from"./flex-DMDPgoAL.js";import{C as k}from"./code-DWBfyX1K.js";import{T as b}from"./text-qGkYlHXO.js";import{M as g}from"./index-Ds8IH1S6.js";import"./index-Bj2TM2QZ.js";import"./preview-YvFt1jHq.js";import"./iframe-CDWZ61nu.js";import"./DocsRenderer-CFRXHY34-Bl-y1wFX.js";import"./react-18-mqHmL3K7.js";import"./index-kjvw1_fE.js";import"./index-B31MnrdB.js";import"./create-recipe-context-BvuJSm_f.js";import"./empty-DSVal0bC.js";import"./grid-CUmxIVD1.js";import"./index-DT6T5u4j.js";import"./create-context-CDNpEWXj.js";import"./factory-R3eP5z4B.js";import"./index-CVNl4AZj.js";import"./aspect-ratio-DXyWJpN9.js";import"./walk-object-DMmPhGdx.js";import"./separator-DGlJ3dT3.js";import"./index-BqWtAW9h.js";import"./editable-DbFvccrt.js";import"./create-slot-recipe-context-L8Dqs-Z3.js";import"./use-environment-context-I47z6LfF.js";import"./use-field-context-BdmdtcMn.js";import"./fieldset-y7yRAWok.js";import"./link-BPnGGMj3.js";import"./tabs-CHUwhNc8.js";import"./badge-Bsc8nPdJ.js";import"./bleed-Dp1z8M-D.js";import"./box-nY8SwEK1.js";import"./spinner-r5sZME21.js";import"./card-DRqQHeaI.js";import"./center-abIhWcwG.js";import"./stack-h-j15La0.js";import"./container-DT0i0QV0.js";import"./highlight-B3PcxdG3.js";import"./float-RWRARY7z.js";import"./grid-item-BfiV3KVu.js";import"./simple-grid-DOX-2bQ8.js";import"./image-Bxc6Eai4.js";import"./kbd-DO8hP_Ni.js";import"./link-box-jYB2vZWW.js";import"./skip-nav-link-Dy-eIl7Z.js";import"./textarea-BArPnP_e.js";import"./heading-B0M8CtMa.js";import"./visually-hidden-Qz-ayMuB.js";import"./portal-BnyNkJAG.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const C=()=>{const i=u().breakpoints;return e.jsxs(e.Fragment,{children:[e.jsxs(a,{width:"100%",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(n,{children:[e.jsx(t,{width:"20%",children:"Navn"}),e.jsx(t,{width:"50%",children:"Verdi"}),e.jsx(t,{width:"30%",children:"Bruk"})]})}),e.jsx(d,{children:i.values.map(r=>e.jsxs(n,{children:[e.jsx(t,{backgroundColor:"white",children:r.name}),e.jsx(t,{backgroundColor:"white",children:r.min}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(c,{gap:"1rem",justifyContent:"space-between",children:[e.jsx(k,{children:`breakpoints.${r.name}`}),e.jsx(m,{value:`breakpoints.${r.name}`,children:e.jsx(p,{})})]})})]},r.name))})]}),e.jsx(b,{as:"h2",fontSize:"lg",fontWeight:700,mt:"2rem",children:"Breakpoint-betingelser"}),e.jsx(j,{beskrivelse:`
        For å gjøre det enklere å hente ut breakpoint-betingelser tilbyr Kvib støttefunksjonen getBreakpointCondition() som tar systemet man bruker og navnet på et breakpoint som argument og returnerer en media query i CSS. Nyttig i kombinasjon med useMediaQuery-hooken.
      `,kildekode:`
const system = useKvibContext();
const isTablet = useMediaQuery(getBreakpointCondition(system, "mdToLg"));
console.log(isTablet); // true hvis skjermstørrelsen er mellom md og lg
`}),e.jsxs(a,{width:"100%",marginTop:"2rem",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(n,{children:[e.jsx(t,{width:"20%",children:"Betingelse"}),e.jsx(t,{width:"80%",children:"Media Query"})]})}),e.jsx(d,{children:Object.entries(i.conditions).map(([r,s])=>e.jsxs(n,{children:[e.jsx(t,{backgroundColor:"white",children:r}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(c,{gap:"1rem",justifyContent:"space-between",alignItems:"center",children:[s,e.jsx(m,{value:s,children:e.jsx(p,{})})]})})]},r))})]})]})};function h(o){const i={h2:"h2",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Komponenter/Tokens/Breakpoints"}),`
`,e.jsx(i.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(C,{})]})}function Be(o={}){const{wrapper:i}={...x(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(h,{...o})}):h(o)}export{Be as default};
