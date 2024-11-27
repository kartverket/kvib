import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as i}from"./index-C2WH5l5l.js";import{ae as o,ai as s,af as a}from"./index-CI09WRSQ.js";import{S as d,P as p}from"./SkipNav.stories-Bh_zuJuT.js";import"./index-Wp2u197Z.js";import"./iframe-DXJI0d5f.js";import"../sb-preview/runtime.js";import"./index-C2tM1_0x.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./skip-nav-link-auHXVL3F.js";import"./factory-DbxLU_Fv.js";import"./use-recipe-Bg1t1VCq.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"skip-nav",children:"Skip Nav"}),`
`,e.jsx(n.p,{children:"Skip Nav Link muliggjør at tastaturbrukere kan hoppe til hovedinnholdet på siden."}),`
`,e.jsx(n.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { SkipNavLink, SkipNavContent } from "@kvib/react";
`})}),`
`,e.jsx(n.h2,{id:"bruk",children:"Bruk"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SkipNavLink"}),` burde være en av de første elementene en bruker møter på når de begynner å navigere på siden etter den er lastet inn.
Det er derfor anbefalt at den er plassert så tidlig som mulig i appen. Den kan enten være et selvlukkende komponent, eller wrappe selve innholdet.`]}),`
`,e.jsx(s,{code:`<>
  // If you want to make it the first element the user encounters
  <SkipNavLink>Skip to content</SkipNavLink>
  <App />
</>

// And inside another component, like App

<div>
  <SkipNavContent />
  // The main content below
</div>
`,dark:!0}),`
`,e.jsx(n.h2,{id:"test-at-det-fungerer",children:"Test at det fungerer"}),`
`,e.jsx(n.p,{children:"Du kan se hvordan SkipNavLink fungerer på denne siden:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Plasser musen med et trykk i eksempelet under."}),`
`,e.jsx(n.li,{children:"Trykk på tab."}),`
`,e.jsx(n.li,{children:"Trykker du på enter vil du bli tatt til hovedinnholdet på siden."}),`
`]}),`
`,e.jsx(a,{of:p})]})}function N(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{N as default};
