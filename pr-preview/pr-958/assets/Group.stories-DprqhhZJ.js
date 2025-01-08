import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{bj as s,B as o}from"./index-CRrqj8Jn.js";const i={title:"Komponenter/Layout/Group",component:s,parameters:{docs:{story:{inline:!0}}},argTypes:{attached:{description:"Attach children to each other",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},grow:{description:"Grow children to fill the container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}},c=`
<Group {...args}>
  <Button variant="outline">First</Button>
  <Button variant="outline">Second</Button>
</Group>
`,e={render:u=>t.jsxs(s,{...u,children:[t.jsx(o,{variant:"outline",children:"First"}),t.jsx(o,{variant:"outline",children:"Second"})]}),parameters:{docs:{source:{code:c}}}};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Group {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
    </Group>,
  parameters: {
    docs: {
      source: {
        code: groupString
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const l=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{m as G,e as P};
