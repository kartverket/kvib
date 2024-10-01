import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{ae as a,af as n,ag as l,ai as m}from"./index-CJ9eVrp8.js";import{L as p,a as o,b as d}from"./LinkOverlay.stories-DQSd75rc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CPQh67bk.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-PULVB27S-CgiffgmI.js";function t(i){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(r.h1,{id:"link-overlay",children:"Link Overlay"}),`
`,e.jsx(r.p,{children:"Link Overlay er et semantisk komponent som brukes til å wrappe elementer sammen i en link."}),`
`,e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { LinkBox, LinkOverlay } from "@kvib/react";
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(r.h2,{id:"nested-link",children:"Nested link"}),`
`,e.jsx(n,{of:d}),`
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
};`,dark:!0})]})}function E(i={}){const{wrapper:r}={...s(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(t,{...i})}):t(i)}export{E as default};
