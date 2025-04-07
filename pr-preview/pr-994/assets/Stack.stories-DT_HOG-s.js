import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as o}from"./stack-h-j15La0.js";import{B as t}from"./box-nY8SwEK1.js";const p={title:"Komponenter/Layout/Stack",component:o,parameters:{docs:{story:{inline:!0}},layout:"padded"},argTypes:{direction:{description:"Direction to stack items",table:{type:{summary:"column | row"}},defaultValue:{summary:"column"},control:{type:"radio"},options:["column","row"]},separator:{description:"React-element to be placed between each item",table:{type:{summary:"StackSeparator"}}}}};t.displayName="Box";o.displayName="Stack";const e={render:c=>r.jsxs(o,{...c,children:[r.jsx(t,{h:"40px",bg:"green.200",children:"1"}),r.jsx(t,{h:"40px",bg:"blue.200",children:"2"}),r.jsx(t,{h:"40px",bg:"red.200",children:"3"})]})};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      <Box h="40px" bg="green.200">
        1
      </Box>
      <Box h="40px" bg="blue.200">
        2
      </Box>
      <Box h="40px" bg="red.200">
        3
      </Box>
    </Stack>
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const i=["Preview"],x=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,x as S};
