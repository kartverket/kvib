import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as x}from"./index-BGZZYR5m.js";import"./chunk-NUUEMKO5-Cwn5nJec.js";import{ae as p}from"./index-C5nq2y4K.js";import{bU as u,ai as a,aj as l,ak as i,an as t,am as d,F as m,C as k,U as c,W as h,T as b}from"./index-Cs5bAGmQ.js";import{K as g}from"./Kodeeksempel-DM4AqMBA.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-BM5SpLdf.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const C=()=>{const r=u().breakpoints;return e.jsxs(e.Fragment,{children:[e.jsxs(a,{width:"100%",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(i,{children:[e.jsx(t,{width:"20%",children:"Navn"}),e.jsx(t,{width:"50%",children:"Verdi"}),e.jsx(t,{width:"30%",children:"Kode"})]})}),e.jsx(d,{children:r.values.map(n=>e.jsxs(i,{children:[e.jsx(t,{backgroundColor:"white",children:n.name}),e.jsx(t,{backgroundColor:"white",children:n.min}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(m,{gap:"1rem",justifyContent:"space-between",children:[e.jsx(k,{children:`breakpoints.${n.name}`}),e.jsx(c,{value:`breakpoints.${n.name}`,children:e.jsx(h,{})})]})})]},n.name))})]}),e.jsx(b,{as:"h2",fontSize:"lg",fontWeight:700,mt:"2rem",children:"Breakpoint-betingelser"}),e.jsx(g,{beskrivelse:`
        For å gjøre det enklere å hente ut breakpoint-betingelser tilbyr Kvib støttefunksjonen getBreakpointCondition() som tar systemet man bruker og navnet på et breakpoint som argument og returnerer en media query i CSS. Nyttig i kombinasjon med useMediaQuery-hooken.
      `,kildekode:`
const system = useKvibContext();
const isTablet = useMediaQuery(getBreakpointCondition(system, "mdToLg"));
console.log(isTablet); // true hvis skjermstørrelsen er mellom md og lg
`}),e.jsxs(a,{width:"100%",marginTop:"2rem",children:[e.jsx(l,{textAlign:"left",children:e.jsxs(i,{children:[e.jsx(t,{width:"20%",children:"Betingelse"}),e.jsx(t,{width:"80%",children:"Media Query"})]})}),e.jsx(d,{children:Object.entries(r.conditions).map(([n,o])=>e.jsxs(i,{children:[e.jsx(t,{backgroundColor:"white",children:n}),e.jsx(t,{backgroundColor:"white",children:e.jsxs(m,{gap:"1rem",justifyContent:"space-between",alignItems:"center",children:[o,e.jsx(c,{value:o,children:e.jsx(h,{})})]})})]},n))})]})]})};function j(s){const r={h2:"h2",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Komponenter/Tokens/Breakpoints"}),`
`,e.jsx(r.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(C,{})]})}function A(s={}){const{wrapper:r}={...x(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(j,{...s})}):j(s)}export{A as default};
