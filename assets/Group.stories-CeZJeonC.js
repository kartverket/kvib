import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{bj as o,B as r}from"./index-CRrqj8Jn.js";const i={title:"Komponenter/Layout/Group",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{attached:{description:"Attach children to each other",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},grow:{description:"Grow children to fill the container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}};r.displayName="Button";o.displayName="Group";const e={render:l=>t.jsxs(o,{...l,children:[t.jsx(r,{variant:"outline",children:"First"}),t.jsx(r,{variant:"outline",children:"Second"})]}),parameters:{layout:"centered"}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Group {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
    </Group>,
  parameters: {
    layout: "centered"
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{d as G,e as P};
