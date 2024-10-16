import{j as e}from"./extends-CwFRzn3r.js";import{F as s}from"./flex-CHlq4-Ax.js";import{C as c}from"./center-D672Tu8u.js";import{T as a}from"./text-rUwQV1v4.js";import{B as r}from"./box-B7h7acUJ.js";import{a as w}from"./factory-CdGA0D9p.js";import{G as S}from"./grid-zpFC2r7C.js";import{H as T}from"./h-stack-P6-XT6iQ.js";const x=w("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});x.displayName="Spacer";const B={title:"Layout/Flex",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},t={render:l=>e.jsxs(s,{...l,children:[e.jsx(c,{width:"100px",backgroundColor:"green.100",children:e.jsx(a,{children:"Text 1"})}),e.jsx(c,{width:"100px",height:"150px",backgroundColor:"blue.100",children:e.jsx(a,{children:"Text 2"})}),e.jsx(r,{flex:"1",backgroundColor:"yellow.100",children:e.jsx(a,{children:"Text 3"})})]})},o={render:l=>e.jsxs(s,{...l,children:[e.jsx(r,{padding:"4",backgroundColor:"green.100",children:"Box 1"}),e.jsx(x,{}),e.jsx(r,{padding:"4",backgroundColor:"blue.100",children:"Box 2"})]})},n={render:()=>e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsx(a,{children:"Flex and Spacer: Full width, equal Spacing"}),e.jsxs(s,{children:[e.jsx(r,{w:"70px",h:"10",bg:"red.500"}),e.jsx(x,{}),e.jsx(r,{w:"170px",h:"10",bg:"red.500"}),e.jsx(x,{}),e.jsx(r,{w:"180px",h:"10",bg:"red.500"})]}),e.jsx(a,{children:"Grid: The children start at the beginning, the 1/3 mark and 2/3 mark"}),e.jsxs(S,{templateColumns:"repeat(3, 1fr)",gap:6,children:[e.jsx(r,{w:"70px",h:"10",bg:"blue.500"}),e.jsx(r,{w:"170px",h:"10",bg:"blue.500"}),e.jsx(r,{w:"180px",h:"10",bg:"blue.500"})]}),e.jsx(a,{children:"HStack: The children have equal spacing but don't span the whole container"}),e.jsxs(T,{spacing:"24px",children:[e.jsx(r,{w:"70px",h:"10",bg:"teal.500"}),e.jsx(r,{w:"170px",h:"10",bg:"teal.500"}),e.jsx(r,{w:"180px",h:"10",bg:"teal.500"})]})]})})};var d,i,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,g,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <KvibFlex {...args}>
      <Box padding="4" backgroundColor="green.100">
        Box 1
      </Box>
      <Spacer />
      <Box padding="4" backgroundColor="blue.100">
        Box 2
      </Box>
    </KvibFlex>
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,m,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Box>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <KvibFlex>
          <Box w="70px" h="10" bg="red.500" />
          <Spacer />
          <Box w="170px" h="10" bg="red.500" />
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </KvibFlex>
        <Text>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>
        <Text>HStack: The children have equal spacing but don't span the whole container</Text>
        <HStack spacing="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
      </Box>
    </>
}`,...(j=(m=n.parameters)==null?void 0:m.docs)==null?void 0:j.source}}};const k=["Flex","FlexWithSpacer","FlexGridStack"],_=Object.freeze(Object.defineProperty({__proto__:null,Flex:t,FlexGridStack:n,FlexWithSpacer:o,__namedExportsOrder:k,default:B},Symbol.toStringTag,{value:"Module"}));export{_ as F,t as a,o as b,n as c};
