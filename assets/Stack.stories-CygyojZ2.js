import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{S as s}from"./stack-DR__wOga.js";import{B as o}from"./box-Bmov6X-Z.js";const p={title:"Komponenter/Layout/Stack",component:s,parameters:{docs:{story:{inline:!0}}},argTypes:{direction:{description:"Direction to stack items",table:{type:{summary:"column | row"}},defaultValue:{summary:"column"},control:{type:"radio"},options:["column","row"]},separator:{description:"React-element to be placed between each item",table:{type:{summary:"StackSeparator"}}}}},x=`
<Stack {...args}>
  <Box w="40px" h="40px" bg="green.200">
    1
  </Box>
  <Box w="40px" h="40px" bg="blue.200">
    2
  </Box>
  <Box w="40px" h="40px" bg="red.200">
    3
  </Box>
</Stack>
`,e={render:c=>r.jsxs(s,{...c,children:[r.jsx(o,{w:"40px",h:"40px",bg:"green.200",children:"1"}),r.jsx(o,{w:"40px",h:"40px",bg:"blue.200",children:"2"}),r.jsx(o,{w:"40px",h:"40px",bg:"red.200",children:"3"})]}),parameters:{docs:{source:{code:x}}}};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      <Box w="40px" h="40px" bg="green.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="blue.200">
        2
      </Box>
      <Box w="40px" h="40px" bg="red.200">
        3
      </Box>
    </Stack>,
  parameters: {
    docs: {
      source: {
        code: stackString
      }
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const i=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,u as S};
