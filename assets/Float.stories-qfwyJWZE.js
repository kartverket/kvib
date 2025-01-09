import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{F as r}from"./float-BUxgzbw7.js";import{B as o}from"./box-Bmov6X-Z.js";const l={title:"Komponenter/Layout/Float",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{placement:{description:"The placement of the indicator",table:{type:{summary:"ConditionalValue< | 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' | 'bottom-center' | 'top-center' >"},defaultValue:{summary:"'top-end'"}},control:{type:"select"},options:["bottom-end","bottom-start","top-end","top-start","bottom-center","top-center"]},offsetX:{description:"The x offset of the indicator",table:{type:{summary:"SystemStyleObject['left']"}},control:{type:"number"}},offsetY:{description:"The y offset of the indicator",table:{type:{summary:"SystemStyleObject['top']"}},control:{type:"number"}},offset:{description:"The x and y offset of the indicator",table:{type:{summary:"SystemStyleObject['top']"}}}}};r.displayName="Float";o.displayName="Box";const e={render:p=>t.jsx(o,{pos:"relative",w:"80px",h:"80px",bg:"gray.200",children:t.jsx(r,{...p,children:t.jsx(o,{borderRadius:"full",bg:"red.400",h:"24px",w:"24px"})})}),parameters:{layout:"centered"}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Box pos="relative" w="80px" h="80px" bg="gray.200">
      <Float {...args}>
        <Box borderRadius={"full"} bg="red.400" h="24px" w="24px" />
      </Float>
    </Box>,
  parameters: {
    layout: "centered"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const m=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{y as F,e as P};
