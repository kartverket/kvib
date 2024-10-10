import{j as r}from"./extends-CwFRzn3r.js";import{B as i,a as e,b as a}from"./chunk-QOOL75FN-BnH8tlum.js";const B={title:"Navigasjon/Breadcrumb",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"type ONLY_FOR_FORMAT = | string | ReactElement<any, string | JSXElementConstructor<any>>"}},control:"text"},spacing:{description:"The left and right margin applied to the separator",table:{type:{summary:"string | number | boolean | (string & {}) | ResponsiveArray<string | number | (string & {})> | Partial<Record<string, string | number | (string & {})>> | ResponsiveArray<...> | Partial<...> | ((theme: Record<...>) => ResponsiveValue<...>)"}},control:"text"}}},n={args:{},render:s=>r.jsxs(i,{...s,children:[r.jsx(e,{children:r.jsx(a,{href:"#",children:"Home"})}),r.jsx(e,{children:r.jsx(a,{href:"#",children:"Docs"})}),r.jsx(e,{isCurrentPage:!0,children:r.jsx(a,{href:"#",children:"Breadcrumb"})})]})},t={args:{},render:s=>r.jsxs(i,{...s,separator:"-",children:[r.jsx(e,{children:r.jsx(a,{href:"#",children:"Home"})}),r.jsx(e,{children:r.jsx(a,{href:"#",children:"About"})}),r.jsx(e,{isCurrentPage:!0,children:r.jsx(a,{href:"#",children:"Contact"})})]})};var c,m,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibBreadcrumb {...args}>
      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Docs</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem isCurrentPage>
        <KvibBreadcrumbLink href="#">Breadcrumb</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>
    </KvibBreadcrumb>
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var d,o,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibBreadcrumb {...args} separator="-">
      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">About</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem isCurrentPage>
        <KvibBreadcrumbLink href="#">Contact</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>
    </KvibBreadcrumb>
}`,...(u=(o=t.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const l=["Breadcrumb","BreadcrumbSeparator"],h=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:n,BreadcrumbSeparator:t,__namedExportsOrder:l,default:B},Symbol.toStringTag,{value:"Module"}));export{h as B,n as a,t as b};
