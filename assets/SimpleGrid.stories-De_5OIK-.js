import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{S as m}from"./simple-grid-BKKqsyC0.js";import{B as r}from"./box-Bmov6X-Z.js";const i={title:"Komponenter/Layout/Simple Grid",component:m,parameters:{docs:{story:{inline:!0}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},columns:{description:"The number of columns",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},minChildWidth:{description:"The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},p=`
<SimpleGrid {...args}>
  <Box bg="green.100" w="2rem" h="2rem" />
  <Box bg="blue.100" w="2rem" h="2rem" />
  <Box bg="red.100" w="2rem" h="2rem" />
  <Box bg="orange.100" w="2rem" h="2rem" />
  <Box bg="purple.100" w="2rem" h="2rem" />
</SimpleGrid>
`,o={args:{columns:3,gap:"5"},render:a=>e.jsxs(m,{...a,children:[e.jsx(r,{bg:"green.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"blue.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"red.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"orange.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"purple.100",w:"2rem",h:"2rem"})]}),parameters:{docs:{source:{code:p}}}};var t,n,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: "5"
  },
  render: args => <SimpleGrid {...args}>
      <Box bg="green.100" w="2rem" h="2rem" />
      <Box bg="blue.100" w="2rem" h="2rem" />
      <Box bg="red.100" w="2rem" h="2rem" />
      <Box bg="orange.100" w="2rem" h="2rem" />
      <Box bg="purple.100" w="2rem" h="2rem" />
    </SimpleGrid>,
  parameters: {
    docs: {
      source: {
        code: simpleGridString
      }
    }
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const l=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{o as P,c as S};
