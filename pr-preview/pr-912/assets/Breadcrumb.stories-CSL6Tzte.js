import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as a}from"./index-CcKhGcwW.js";import{B as g,a as v,b as x,c as j,d as L,e as k}from"./breadcrumb-B1uAdMvL.js";const d=a.forwardRef(function(u,l){const{separator:b,separatorGap:p,children:h,...B}=u,n=a.Children.toArray(h).filter(a.isValidElement);return e.jsx(g,{ref:l,...B,children:e.jsx(v,{gap:p,children:n.map((y,o)=>{const f=o===n.length-1;return e.jsxs(a.Fragment,{children:[e.jsx(x,{children:y}),!f&&e.jsx(j,{children:b})]},o)})})})}),s=L,K=k,S={title:"Komponenter/Breadcrumb",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},args:{size:"md",variant:"underline",separator:"/",separatorGap:"8px",colorPalette:"green"},argTypes:{variant:{description:"The variant of the breadcrumb",table:{type:{summary:"underline | plain"},defaultValue:{summary:"underline"}},options:["underline","plain"],control:{type:"radio"}},size:{description:"The size of the breadcrumb",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"ReactNode"}},control:"text"},separatorGap:{description:"The gap between the separator and the breadcrumb item",table:{type:{summary:"SystemStyleObject['gap']"}}},colorPalette:{description:"The color palette of the breadcrumb",table:{type:{summary:"green | blue"}},defaultValue:{summary:"green"},options:["green","blue"],control:{type:"radio"}}}},r={render:t=>e.jsxs(d,{...t,children:[e.jsx(s,{href:"#",children:"Home"}),e.jsx(s,{href:"#",children:"Docs"}),e.jsx(K,{href:"#",children:"Breadcrumb"})]})};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <KvibBreadcrumb {...args}>
      <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      <KvibBreadcrumbLink href="#">Docs</KvibBreadcrumbLink>
      <KvibBreadcrumbCurrentLink href="#">Breadcrumb</KvibBreadcrumbCurrentLink>
    </KvibBreadcrumb>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Preview"],R=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{R as B,r as P};