import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as n,af as o,ag as d,ai as c}from"./index-BGnjr7g7.js";import{B as s,a as m,b as u}from"./Breadcrumb.stories-Tnw_aM4y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CnGWpzHb.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./breadcrumb-item-Bpcu6y4S.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./factory-CdGA0D9p.js";import"./children-2ZXUntH3.js";import"./cx-BDMMs1jM.js";import"./context-CBKykClo.js";import"./define-styles-BSAHv3yx.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:s}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsxs(e.p,{children:["Breadcrumb er et navigasjonsmønster som hjelper brukerne å forstå hierarkiet på en nettside. Legg til ",r.jsx(e.code,{children:"ìsCurrentPage"}),"-proppen på ",r.jsx(e.code,{children:"BreacrumbItem"}),` brukeren står i.
Breadcrumb inneholder `,r.jsx(e.code,{children:"Box"})," så det er mulig å bruke alle style props derfra."]}),`
`,r.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@kvib/react";
`})}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(o,{of:m}),`
`,r.jsx(d,{of:m}),`
`,r.jsx(e.h2,{id:"separator",children:"Separator"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h2,{id:"bruk-av-breadcrumb-med-et-routing-library",children:"Bruk av Breadcrumb med et Routing Library"}),`
`,r.jsxs(e.p,{children:["For å bruke Breadcrumb med et routing library som React Router må du legge til ",r.jsx(e.code,{children:"as"}),"-proppen på ",r.jsx(e.code,{children:"BreadcrumbLink"}),`.
Dermed vil `,r.jsx(e.code,{children:"a"}),"-taggen bli byttet ut med Reacts ",r.jsx(e.code,{children:"Link"})]}),`
`,r.jsx(c,{code:`// import { Link } from "@react/router"

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="#">
      Home
    </BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="#">
      About
    </BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
`,dark:!0})]})}function T(t={}){const{wrapper:e}={...a(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(i,{...t})}):i(t)}export{T as default};
