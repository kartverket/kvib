import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{S as c}from"./stack-Bh3oWNRR.js";import{S as B}from"./stack-separator-D2gEZy64.js";import{B as r}from"./box-C9nK2UO9.js";import{H as v}from"./h-stack-CjVo9nnl.js";import{V as j}from"./v-stack-bWf0p04U.js";const V={title:"Komponenter/Stack",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{align:{description:"Short for alingItems",table:{type:{summary:"normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["normal","stretch","center","start","end","flex-start","flex-end","self-start","self-end","baseline","first baseline","last baseline","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},direction:{description:"Direction to stack items",table:{type:{summary:"column | row"}},defaultValue:{summary:"column"},control:{type:"radio"},options:["column","row"]},separator:{description:"If true, each stack item will be followed by a divider",table:{type:{summary:"StackSeparator"}},defaultValue:{summary:""}},justify:{description:"Short for justifyContent",table:{type:{summary:"center | start | end | flex-start | flex-end | left | right | normal | space-between | space-around | space-evenly | stretch | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["center","start","end","flex-start","flex-end","left","right","normal","space-between","space-around","space-evenly","stretch","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},gap:{description:"The space between each child",table:{type:{summary:"px | rem"}},defaultValue:{summary:""}},wrap:{description:"short for flexWrap",table:{type:{summary:"nowrap | wrap | wrap-reverse | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["nowrap","wrap","wrap-reverse","inherit","initial","revert","revert-layer","unset"]}}},o={args:{direction:"row"},render:t=>e.jsxs(c,{...t,gap:"24px",children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},a={render:t=>e.jsxs(c,{...t,direction:["column","row"],gap:"24px",children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},n={render:t=>e.jsxs(c,{...t,separator:e.jsx(B,{borderColor:"gray.200"}),gap:12,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},s={render:t=>e.jsxs(v,{...t,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},i={render:t=>e.jsxs(j,{...t,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: "row"
  },
  render: args => <KvibStack {...args} gap="24px">
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </KvibStack>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,x,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <KvibStack {...args} direction={["column", "row"]} gap="24px">
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </KvibStack>
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,m,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <KvibStack {...args} separator={<StackSeparator borderColor="gray.200" />} gap={12}>
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </KvibStack>
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var k,w,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <HStack {...args}>
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </HStack>
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,y,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <VStack {...args}>
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </VStack>
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const H=["Preview","ResponsiveStack","StackStyled","HStackDemo","VStackDemo"],T=Object.freeze(Object.defineProperty({__proto__:null,HStackDemo:s,Preview:o,ResponsiveStack:a,StackStyled:n,VStackDemo:i,__namedExportsOrder:H,default:V},Symbol.toStringTag,{value:"Module"}));export{s as H,o as P,a as R,T as S,i as V,n as a};