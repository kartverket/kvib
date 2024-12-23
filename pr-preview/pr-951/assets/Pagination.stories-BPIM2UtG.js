import{j as e}from"./index-D6_wGsWO.js";import{be as s,H as i,bf as m,bg as l,bh as p}from"./index-DPEpWUr_.js";const u={title:"Komponenter/Pagination",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{size:{description:"The size of the pagination component.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},variant:{description:"The variant of the pagination component.",table:{type:{summary:"'solid' | 'outline'"},defaultValue:{summary:"outline"}},control:"radio",options:["solid","outline"]},defaultPage:{description:"The default page number.",table:{type:{summary:"number"}},control:"number"},count:{description:"The total number of pages.",table:{type:{summary:"number"}},control:"number"},pageSize:{description:"The number of items per page.",table:{type:{summary:"number"}},control:"number"}},args:{size:"sm"}},c=t=>e.jsx(s,{count:15,pageSize:5,defaultPage:1,...t,children:e.jsxs(i,{children:[e.jsx(m,{}),e.jsx(l,{}),e.jsx(p,{})]})}),a={render:t=>e.jsx(c,{...t})};var o,r,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <PaginationExample {...args} />
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{y as P,a};
