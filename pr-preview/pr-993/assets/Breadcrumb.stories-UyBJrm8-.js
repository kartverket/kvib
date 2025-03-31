import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{o as a,p as s,q as m,I as i}from"./index-BYbB6rBR.js";import{B as d}from"./box-nY8SwEK1.js";const p={title:"Komponenter/Breadcrumb",component:a,parameters:{docs:{story:{inline:!0}}},args:{size:"md",variant:"underline",separator:"/",separatorGap:"8px",colorPalette:"green"},argTypes:{variant:{description:"The variant of the breadcrumb",table:{type:{summary:"underline | plain"},defaultValue:{summary:"underline"}},options:["underline","plain"],control:{type:"radio"}},size:{description:"The size of the breadcrumb",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"ReactNode"}},control:"text"},separatorGap:{description:"The gap between the separator and the breadcrumb item",table:{type:{summary:"SystemStyleObject['gap']"}}},colorPalette:{description:"The color palette of the breadcrumb",table:{type:{summary:"green | blue | gray"}},defaultValue:{summary:"green"},options:["green","blue","gray"],control:{type:"radio"}}}};a.displayName="Breadcrumb";s.displayName="BreadcrumbLink";m.displayName="BreadcrumbCurrentLink";i.displayName="Icon";const r={render:c=>e.jsxs(a,{...c,separator:e.jsx(d,{css:{m:0,p:0,height:"1.5em"},children:e.jsx(i,{icon:"chevron_right"})}),children:[e.jsx(s,{href:"#",children:"Level 1"}),e.jsx(m,{children:"Level 2"})]})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args} separator={<Box css={{
    m: 0,
    p: 0,
    height: "1.5em"
  }}>
          <Icon icon="chevron_right" />
        </Box>}>
      <BreadcrumbLink href="#">Level 1</BreadcrumbLink>
      <BreadcrumbCurrentLink>Level 2</BreadcrumbCurrentLink>
    </Breadcrumb>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["Preview"],h=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{h as B,r as P};
