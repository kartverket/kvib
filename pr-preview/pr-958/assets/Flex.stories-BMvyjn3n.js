import{j as e}from"./index-Bqoz-m_F.js";import{c7 as a,ap as n,T as r,G as i}from"./index-DuafSpvy.js";const m={title:"Komponenter/Layout/Flex",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{align:{table:{type:{summary:"SystemStyleObject['alignItems']"}}},justify:{table:{type:{summary:"SystemStyleObject['justifyContent']"}}},wrap:{table:{type:{summary:"SystemStyleObject['flexWrap']"}}},direction:{table:{type:{summary:"SystemStyleObject['flexDirection']"}}},basis:{table:{type:{summary:"SystemStyleObject['flexBasis']"}}},grow:{table:{type:{summary:"SystemStyleObject['flexGrow']"}}},shrink:{table:{type:{summary:"SystemStyleObject['flexShrink']"}}},inline:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}},y=`
<Flex {...args}>
  <Center width="100px" bg="green.100">
    <Text>Text 1</Text>
  </Center>
  <Center width="100px" height="150px" bg="blue.100">
    <Text>Text 2</Text>
  </Center>
  <Box flex="1" bg="yellow.100">
    <Text>Text 3</Text>
  </Box>
</Flex>
`,t={render:o=>e.jsxs(a,{...o,children:[e.jsx(n,{width:"100px",bg:"green.100",children:e.jsx(r,{children:"Text 1"})}),e.jsx(n,{width:"100px",height:"150px",bg:"blue.100",children:e.jsx(r,{children:"Text 2"})}),e.jsx(i,{flex:"1",bg:"yellow.100",children:e.jsx(r,{children:"Text 3"})})]}),parameters:{docs:{source:{code:y}}}};var s,l,x;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Flex {...args}>
      <Center width="100px" bg="green.100">
        <Text>Text 1</Text>
      </Center>
      <Center width="100px" height="150px" bg="blue.100">
        <Text>Text 2</Text>
      </Center>
      <Box flex="1" bg="yellow.100">
        <Text>Text 3</Text>
      </Box>
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: flexString
      }
    }
  }
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const c=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{d as F,t as P};
