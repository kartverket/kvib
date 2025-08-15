import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{bd as r,B as o}from"./index-BG6S5Svo.js";const l={title:"Komponenter/Layout/Group",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{attached:{description:"Attach children to each other",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},grow:{description:"Grow children to fill the container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}};o.displayName="Button";r.displayName="Group";const e={render:i=>t.jsxs(r,{...i,children:[t.jsx(o,{variant:"outline",children:"First"}),t.jsx(o,{variant:"outline",children:"Second"})]})};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Group {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
    </Group>
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{d as G,e as P};
