import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as s}from"./index-BRkUXrbv.js";import{ae as a,af as i,ag as l,ai as m}from"./index-CYK-Q4Rd.js";import{L as p,P as o,a as d}from"./LinkOverlay.stories-CDiuL5lP.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-C0HEmsSc.js";import"../sb-preview/runtime.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./link-box-8g71a2kv.js";import"./factory-Dr_T95xI.js";import"./heading-D7346gVA.js";import"./create-recipe-context-AlCFSakd.js";import"./empty-DSVal0bC.js";import"./use-recipe-CWoigbDD.js";import"./text-DJW8V014.js";import"./box-C9nK2UO9.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(r.h1,{id:"link-overlay",children:"Link Overlay"}),`
`,e.jsx(r.p,{children:"Link Overlay er et semantisk komponent som brukes til å wrappe elementer sammen i en link."}),`
`,e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { LinkBox, LinkOverlay } from "@kvib/react";
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(r.h2,{id:"nested-link",children:"Nested link"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(r.h2,{id:"link-overlay-med-routing-library",children:"Link Overlay med Routing Library"}),`
`,e.jsxs(r.p,{children:["For å legge til støtte for biblioteker som Next.js eller gatsby Link må du wrappe de rundt ",e.jsx(r.code,{children:"LinkOverlay"})," eller bruke de som en prop."]}),`
`,e.jsx(m,{code:`const RoutingExample = () => {
  return (
    <LinkBox as="article">
      <h2>
        <LinkOverlay as={NextLink} href="#">
          Some blog post
        </LinkOverlay>
      </h2>
      <p>
        As a side note, using quotation marks around an attribute value is required only if this value is not a valid
        identifier.
      </p>
      <a href="#">Some inner link</a>
    </LinkBox>
  );
};`,dark:!0})]})}function P(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{P as default};
