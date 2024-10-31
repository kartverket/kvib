import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{ae as a,af as n,ag as m,ai as p}from"./index-eN0ELeIH.js";import{L as l,P as o,a as d}from"./LinkOverlay.stories-CVPbR-_Y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BjjkCpBY.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./forward-ref-BWI-Phbn.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./cx-BDMMs1jM.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-Dk7VeZ_r.js";import"./use-theme-CeOC8r1f.js";import"./text-D14Jyc6W.js";import"./box-CwIaBbUI.js";function t(i){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(r.h1,{id:"link-overlay",children:"Link Overlay"}),`
`,e.jsx(r.p,{children:"Link Overlay er et semantisk komponent som brukes til å wrappe elementer sammen i en link."}),`
`,e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { LinkBox, LinkOverlay } from "@kvib/react";
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(r.h2,{id:"nested-link",children:"Nested link"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(r.h2,{id:"link-overlay-med-routing-library",children:"Link Overlay med Routing Library"}),`
`,e.jsxs(r.p,{children:["For å legge til støtte for biblioteker som Next.js eller gatsby Link må du wrappe de rundt ",e.jsx(r.code,{children:"LinkOverlay"})," eller bruke de som en prop."]}),`
`,e.jsx(p,{code:`const RoutingExample = () => {
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
};`,dark:!0})]})}function T(i={}){const{wrapper:r}={...s(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(t,{...i})}):t(i)}export{T as default};
