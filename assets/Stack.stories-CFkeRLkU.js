import{j as e}from"./extends-CwFRzn3r.js";import{S as v}from"./chunk-KTD65HY5-Jvpz-zFG.js";import{V as B}from"./chunk-NTCQBYKE-BJzF3cNd.js";import{H as j}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{S as c}from"./chunk-ZHMYA64R-V_96TD_T.js";import{B as r}from"./chunk-PULVB27S-CgiffgmI.js";const V={title:"Layout/Stack",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{align:{description:"Short for alingItems",table:{type:{summary:"normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["normal","stretch","center","start","end","flex-start","flex-end","self-start","self-end","baseline","first baseline","last baseline","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},direction:{description:"Direction to stack items",table:{type:{summary:"column | row"}},defaultValue:{summary:"column"},control:{type:"radio"},options:["column","row"]},divider:{description:"If true, each stack item will be followed by a divider",table:{type:{summary:"StackDivider"}},defaultValue:{summary:""}},isInline:{description:"If true, the items will be stacked horizontally",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},justify:{description:"Short for justifyContent",table:{type:{summary:"center | start | end | flex-start | flex-end | left | right | normal | space-between | space-around | space-evenly | stretch | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["center","start","end","flex-start","flex-end","left","right","normal","space-between","space-around","space-evenly","stretch","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},shouldWrapChildren:{description:"If true, the children will be wrapped in a Box",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},spacing:{description:"The space between each child",table:{type:{summary:"px | rem"}},defaultValue:{summary:""},control:{type:"string"}},wrap:{description:"short for flexWrap",table:{type:{summary:"nowrap | wrap | wrap-reverse | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["nowrap","wrap","wrap-reverse","inherit","initial","revert","revert-layer","unset"]}}},o={args:{direction:"row"},render:t=>e.jsxs(c,{...t,spacing:"24px",children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},n={render:t=>e.jsxs(c,{...t,direction:["column","row"],spacing:"24px",children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},a={render:t=>e.jsxs(c,{divider:e.jsx(v,{borderColor:"gray.200"}),spacing:12,children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},i={render:t=>e.jsxs(j,{children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},s={render:t=>e.jsxs(B,{children:[e.jsx(r,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),e.jsx(r,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,x,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  render: args => <KvibStack divider={<StackDivider borderColor="gray.200" />} spacing={12}>
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
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var k,f,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <HStack>
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,S,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <VStack>
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const D=["Stack","ResponsiveStack","StackStyled","HStackDemo","VStackDemo"],T=Object.freeze(Object.defineProperty({__proto__:null,HStackDemo:i,ResponsiveStack:n,Stack:o,StackStyled:a,VStackDemo:s,__namedExportsOrder:D,default:V},Symbol.toStringTag,{value:"Module"}));export{i as H,n as R,T as S,s as V,a,o as b};
