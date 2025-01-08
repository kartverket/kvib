import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{F as x}from"./flex-BzzyrBhv.js";import{C as n}from"./center-BjTi-jDO.js";import{T as r}from"./text-Dwwg-e87.js";import{B as m}from"./box-Bmov6X-Z.js";const i={title:"Komponenter/Layout/Flex",component:x,parameters:{docs:{story:{inline:!0}}},argTypes:{align:{table:{type:{summary:"SystemStyleObject['alignItems']"}}},justify:{table:{type:{summary:"SystemStyleObject['justifyContent']"}}},wrap:{table:{type:{summary:"SystemStyleObject['flexWrap']"}}},direction:{table:{type:{summary:"SystemStyleObject['flexDirection']"}}},basis:{table:{type:{summary:"SystemStyleObject['flexBasis']"}}},grow:{table:{type:{summary:"SystemStyleObject['flexGrow']"}}},shrink:{table:{type:{summary:"SystemStyleObject['flexShrink']"}}},inline:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}},y=`
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
`,t={render:a=>e.jsxs(x,{...a,children:[e.jsx(n,{width:"100px",bg:"green.100",children:e.jsx(r,{children:"Text 1"})}),e.jsx(n,{width:"100px",height:"150px",bg:"blue.100",children:e.jsx(r,{children:"Text 2"})}),e.jsx(m,{flex:"1",bg:"yellow.100",children:e.jsx(r,{children:"Text 3"})})]}),parameters:{docs:{source:{code:y}}}};var s,l,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const p=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{T as F,t as P};
