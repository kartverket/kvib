import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as i}from"./index-BRkUXrbv.js";import{ae as o,ai as s,af as a}from"./index-DwFcQOyU.js";import{S as p,P as d}from"./SkipNav.stories-CJo30IrP.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-cj70gCAA.js";import"../sb-preview/runtime.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./skip-nav-link-CeTS-0SG.js";import"./factory-Dr_T95xI.js";import"./use-recipe-CWoigbDD.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
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
`,e.jsx(a,{of:d})]})}function y(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{y as default};
