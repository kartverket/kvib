import{cn as t,j as s,b as a,T as d}from"./iframe-B_C8pV-B.js";const l={title:"Komponenter/Visually Hidden",component:t,parameters:{docs:{story:{inline:!0}}}};t.displayName="VisuallyHidden";d.displayName="Text";a.displayName="Box";const e={render:o=>s.jsxs(a,{children:[s.jsx(t,{...o,children:"This text is visually hidden"}),s.jsx(d,{children:"Check the DOM to see hidden element"})]})},c=["Preview"];var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Box>
      <KvibVisuallyHidden {...args}>This text is visually hidden</KvibVisuallyHidden>
      <Text>Check the DOM to see hidden element</Text>
    </Box>
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,u as V};
