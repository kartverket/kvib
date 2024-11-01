import{j as e}from"./extends-CwFRzn3r.js";import{S as c}from"./stack-BdCvkUuU.js";import{B as r}from"./box-CwIaBbUI.js";import{S as C}from"./stack-divider-BE2Yhewy.js";import{H as B}from"./h-stack-DtOTlfD9.js";import{V as j}from"./v-stack-D7XFool3.js";const V={title:"Komponenter/Stack",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{align:{description:"Short for alingItems",table:{type:{summary:"normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["normal","stretch","center","start","end","flex-start","flex-end","self-start","self-end","baseline","first baseline","last baseline","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},direction:{description:"Direction to stack items",table:{type:{summary:"column | row"}},defaultValue:{summary:"column"},control:{type:"radio"},options:["column","row"]},divider:{description:"If true, each stack item will be followed by a divider",table:{type:{summary:"StackDivider"}},defaultValue:{summary:""}},isInline:{description:"If true, the items will be stacked horizontally",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},justify:{description:"Short for justifyContent",table:{type:{summary:"center | start | end | flex-start | flex-end | left | right | normal | space-between | space-around | space-evenly | stretch | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["center","start","end","flex-start","flex-end","left","right","normal","space-between","space-around","space-evenly","stretch","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},shouldWrapChildren:{description:"If true, the children will be wrapped in a Box",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},spacing:{description:"The space between each child",table:{type:{summary:"px | rem"}},defaultValue:{summary:""}},wrap:{description:"short for flexWrap",table:{type:{summary:"nowrap | wrap | wrap-reverse | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["nowrap","wrap","wrap-reverse","inherit","initial","revert","revert-layer","unset"]}}},o={args:{direction:"row"},render:t=>e.jsxs(c,{...t,spacing:"24px",children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},n={render:t=>e.jsxs(c,{...t,direction:["column","row"],spacing:"24px",children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},a={render:t=>e.jsxs(c,{...t,divider:e.jsx(C,{borderColor:"gray.200"}),spacing:12,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},i={render:t=>e.jsxs(B,{...t,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},s={render:t=>e.jsxs(j,{...t,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: "row"
  },
  render: args => <KvibStack {...args} spacing="24px">
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,x,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <KvibStack {...args} direction={["column", "row"]} spacing="24px">
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
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,m,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <KvibStack {...args} divider={<StackDivider borderColor="gray.200" />} spacing={12}>
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
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var k,f,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,S,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const D=["Preview","ResponsiveStack","StackStyled","HStackDemo","VStackDemo"],O=Object.freeze(Object.defineProperty({__proto__:null,HStackDemo:i,Preview:o,ResponsiveStack:n,StackStyled:a,VStackDemo:s,__namedExportsOrder:D,default:V},Symbol.toStringTag,{value:"Module"}));export{i as H,o as P,n as R,O as S,s as V,a};
