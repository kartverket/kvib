import{bQ as r,j as t,v as o}from"./iframe-B_C8pV-B.js";const i={title:"Komponenter/Layout/Group",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{attached:{description:"Attach children to each other",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},grow:{description:"Grow children to fill the container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}};o.displayName="Button";r.displayName="Group";const e={render:l=>t.jsxs(r,{...l,children:[t.jsx(o,{variant:"outline",children:"First"}),t.jsx(o,{variant:"outline",children:"Second"})]})},u=["Preview"];var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Group {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
    </Group>
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{p as G,e as P};
