import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{G as w}from"./grid-BtoyrwbI.js";import{H as S}from"./h-stack-CjVo9nnl.js";import{F as x}from"./flex-DKwYg45R.js";import{C as d}from"./center-7hWxgEBL.js";import{T as a}from"./text-DJW8V014.js";import{B as r}from"./box-C9nK2UO9.js";import{S as l}from"./separator-CmGcrybP.js";const T={title:"Komponenter/Flex",component:x,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},o={render:s=>e.jsxs(x,{...s,children:[e.jsx(d,{width:"100px",backgroundColor:"green.100",children:e.jsx(a,{children:"Text 1"})}),e.jsx(d,{width:"100px",height:"150px",backgroundColor:"blue.100",children:e.jsx(a,{children:"Text 2"})}),e.jsx(r,{flex:"1",backgroundColor:"yellow.100",children:e.jsx(a,{children:"Text 3"})})]})},t={render:s=>e.jsxs(x,{...s,children:[e.jsx(r,{padding:"4",backgroundColor:"green.100",children:"Box 1"}),e.jsx(l,{}),e.jsx(r,{padding:"4",backgroundColor:"blue.100",children:"Box 2"})]})},n={render:()=>e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsx(a,{children:"Flex and Spacer: Full width, equal Spacing"}),e.jsxs(x,{children:[e.jsx(r,{w:"70px",h:"10",bg:"red.500"}),e.jsx(l,{}),e.jsx(r,{w:"170px",h:"10",bg:"red.500"}),e.jsx(l,{}),e.jsx(r,{w:"180px",h:"10",bg:"red.500"})]}),e.jsx(a,{children:"Grid: The children start at the beginning, the 1/3 mark and 2/3 mark"}),e.jsxs(w,{templateColumns:"repeat(3, 1fr)",gap:6,children:[e.jsx(r,{w:"70px",h:"10",bg:"blue.500"}),e.jsx(r,{w:"170px",h:"10",bg:"blue.500"}),e.jsx(r,{w:"180px",h:"10",bg:"blue.500"})]}),e.jsx(a,{children:"HStack: The children have equal spacing but don't span the whole container"}),e.jsxs(S,{gap:"24px",children:[e.jsx(r,{w:"70px",h:"10",bg:"teal.500"}),e.jsx(r,{w:"170px",h:"10",bg:"teal.500"}),e.jsx(r,{w:"180px",h:"10",bg:"teal.500"})]})]})})};var i,p,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <KvibFlex {...args}>
      <Center width="100px" backgroundColor="green.100">
        <Text>Text 1</Text>
      </Center>
      <Center width="100px" height="150px" backgroundColor="blue.100">
        <Text>Text 2</Text>
      </Center>
      <Box flex="1" backgroundColor="yellow.100">
        <Text>Text 3</Text>
      </Box>
    </KvibFlex>
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,g,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <KvibFlex {...args}>
      <Box padding="4" backgroundColor="green.100">
        Box 1
      </Box>
      <Separator />
      <Box padding="4" backgroundColor="blue.100">
        Box 2
      </Box>
    </KvibFlex>
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,m,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Box>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <KvibFlex>
          <Box w="70px" h="10" bg="red.500" />
          <Separator />
          <Box w="170px" h="10" bg="red.500" />
          <Separator />
          <Box w="180px" h="10" bg="red.500" />
        </KvibFlex>
        <Text>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>
        <Text>HStack: The children have equal spacing but don't span the whole container</Text>
        <HStack gap="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
      </Box>
    </>
}`,...(j=(m=n.parameters)==null?void 0:m.docs)==null?void 0:j.source}}};const B=["Preview","FlexWithSpacer","FlexGridStack"],_=Object.freeze(Object.defineProperty({__proto__:null,FlexGridStack:n,FlexWithSpacer:t,Preview:o,__namedExportsOrder:B,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as F,o as P,t as a,n as b};
