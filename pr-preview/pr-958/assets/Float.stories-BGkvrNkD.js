import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{F as n}from"./float-BUxgzbw7.js";import{B as o}from"./box-Bmov6X-Z.js";const i={title:"Komponenter/Layout/Float",component:n,parameters:{docs:{story:{inline:!0}}},argTypes:{placement:{description:"The placement of the indicator",table:{type:{summary:"ConditionalValue< | 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' | 'bottom-center' | 'top-center' >"},defaultValue:{summary:"'top-end'"}},control:{type:"select"},options:["bottom-end","bottom-start","top-end","top-start","bottom-center","top-center"]},offsetX:{description:"The x offset of the indicator",table:{type:{summary:"SystemStyleObject['left']"}},control:{type:"number"}},offsetY:{description:"The y offset of the indicator",table:{type:{summary:"SystemStyleObject['top']"}},control:{type:"number"}},offset:{description:"The x and y offset of the indicator",table:{type:{summary:"SystemStyleObject['top']"}}}}},l=`
<Box position="relative" w="80px" h="80px" bg="gray.200">
  <Float {...args}>
    <Box borderRadius={"full"} bg="red.400" h="24px" w="24px" />
  </Float>
</Box>
`,t={render:p=>e.jsx(o,{position:"relative",w:"80px",h:"80px",bg:"gray.200",children:e.jsx(n,{...p,children:e.jsx(o,{borderRadius:"full",bg:"red.400",h:"24px",w:"24px"})})}),parameters:{docs:{source:{code:l}}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Box position="relative" w="80px" h="80px" bg="gray.200">
      <Float {...args}>
        <Box borderRadius={"full"} bg="red.400" h="24px" w="24px" />
      </Float>
    </Box>,
  parameters: {
    docs: {
      source: {
        code: floatString
      }
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const c=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{u as F,t as P};
