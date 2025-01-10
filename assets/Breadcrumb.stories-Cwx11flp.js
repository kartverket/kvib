import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{o as t,p as a,q as m,I as i}from"./index-D7XRvPGg.js";import{B as d}from"./box-DTgFSJnn.js";const l={title:"Komponenter/Breadcrumb",component:t,parameters:{docs:{story:{inline:!0}}},args:{size:"md",variant:"underline",separator:"/",separatorGap:"8px",colorPalette:"green"},argTypes:{variant:{description:"The variant of the breadcrumb",table:{type:{summary:"underline | plain"},defaultValue:{summary:"underline"}},options:["underline","plain"],control:{type:"radio"}},size:{description:"The size of the breadcrumb",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"ReactNode"}},control:"text"},separatorGap:{description:"The gap between the separator and the breadcrumb item",table:{type:{summary:"SystemStyleObject['gap']"}}},colorPalette:{description:"The color palette of the breadcrumb",table:{type:{summary:"green | blue | gray"}},defaultValue:{summary:"green"},options:["green","blue","gray"],control:{type:"radio"}}}};t.displayName="Breadcrumb";a.displayName="BreadcrumbLink";m.displayName="BreadcrumbCurrentLink";i.displayName="Icon";const r={render:c=>e.jsxs(t,{...c,separator:e.jsx(d,{css:{m:0,p:0,height:"1.5em"},children:e.jsx(i,{icon:"chevron_right"})}),children:[e.jsx(a,{href:"#",children:"Level 1"}),e.jsx(a,{href:"#",children:"Level 2"}),e.jsx(m,{children:"Level 3"})]})};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args} separator={<Box css={{
    m: 0,
    p: 0,
    height: "1.5em"
  }}>
          <Icon icon="chevron_right" />
        </Box>}>
      <BreadcrumbLink href="#">Level 1</BreadcrumbLink>
      <BreadcrumbLink href="#">Level 2</BreadcrumbLink>
      <BreadcrumbCurrentLink>Level 3</BreadcrumbCurrentLink>
    </Breadcrumb>
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{y as B,r as P};
