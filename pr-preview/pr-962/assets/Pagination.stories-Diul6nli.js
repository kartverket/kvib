import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{at as o,M as s,au as m,av as g,aw as u}from"./index-CoJY4uhr.js";const l={title:"Komponenter/Pagination",component:o,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{size:{description:"The size of the pagination component.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},variant:{description:"The variant of the pagination component.",table:{type:{summary:"'solid' | 'outline'"},defaultValue:{summary:"outline"}},control:"radio",options:["solid","outline"]},defaultPage:{description:"The default page number.",table:{type:{summary:"number"}},control:"number"},count:{description:"The total number of pages.",table:{type:{summary:"number"}},control:"number"},pageSize:{description:"The number of items per page.",table:{type:{summary:"number"}},control:"number"}},args:{size:"sm"}},a={args:{count:10,defaultPage:1,pageSize:5},render:i=>e.jsx(o,{...i,children:e.jsxs(s,{children:[e.jsx(m,{}),e.jsx(g,{}),e.jsx(u,{})]})})};var t,n,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    count: 10,
    defaultPage: 1,
    pageSize: 5
  },
  render: args => <Pagination {...args}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </Pagination>
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const p=["Preview"],P=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{P,a};
