import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as i,af as a,ag as d,ai as c}from"./index-BP_ekSlm.js";import{B as s,a as n,b as u}from"./Breadcrumb.stories-C_XEfu18.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B3BkUXYO.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CHDWSgKD.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./index-2ZXUntH3.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:s}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsxs(e.p,{children:["Breadcrumb er et navigasjonsmønster som hjelper brukerne å forstå hierarkiet på en nettside. Legg til ",r.jsx(e.code,{children:"ìsCurrentPage"}),"-proppen på ",r.jsx(e.code,{children:"BreacrumbItem"}),` brukeren står i.
Breadcrumb inneholder `,r.jsx(e.code,{children:"Box"})," så det er mulig å bruke alle style props derfra."]}),`
`,r.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@kvib/react";
`})}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(a,{of:n}),`
`,r.jsx(d,{of:n}),`
`,r.jsx(e.h2,{id:"separator",children:"Separator"}),`
`,r.jsx(a,{of:u}),`
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
`,dark:!0})]})}function F(t={}){const{wrapper:e}={...m(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(o,{...t})}):o(t)}export{F as default};
