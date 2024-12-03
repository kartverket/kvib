import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as s}from"./index-C2WH5l5l.js";import{ae as a,af as i,ag as l,ai as d}from"./index-6FsOQEsV.js";import{L as m,P as o,a as p}from"./LinkOverlay.stories-ILd5iPup.js";import"./index-Wp2u197Z.js";import"./iframe-CAp2W-nZ.js";import"../sb-preview/runtime.js";import"./index-C2tM1_0x.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./index-BM5ggu4W.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(n.h1,{id:"link-overlay",children:"Link Overlay"}),`
`,e.jsx(n.p,{children:"Link Overlay er et semantisk komponent som brukes til å wrappe elementer sammen i en link."}),`
`,e.jsx(n.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { LinkBox, LinkOverlay } from "@kvib/react";
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"nested-link",children:"Nested link"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"link-overlay-med-routing-library",children:"Link Overlay med Routing Library"}),`
`,e.jsxs(n.p,{children:["For å legge til støtte for biblioteker som Next.js eller gatsby Link må du wrappe de rundt ",e.jsx(n.code,{children:"LinkOverlay"})," eller bruke de som en prop."]}),`
`,e.jsx(d,{code:`const RoutingExample = () => {
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
};`,dark:!0})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
