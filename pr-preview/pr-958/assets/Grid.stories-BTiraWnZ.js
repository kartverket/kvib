import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{G as a}from"./grid-ssdSjSnm.js";import{G as r}from"./grid-item-CQ9trW14.js";const i={title:"Komponenter/Layout/Grid",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},m=`
<Grid templateColumns="repeat(3, 4rem)" gap="4" {...args}>
  <GridItem h="12" bg="blue.500" />
  <GridItem h="12" bg="green.500" />
  <GridItem h="12" bg="yellow.500" />
  <GridItem h="12" bg="red.500" />
  <GridItem h="12" bg="purple.500" />
</Grid>
`,t={render:p=>e.jsxs(a,{templateColumns:"repeat(3, 4rem)",gap:"4",...p,children:[e.jsx(r,{h:"12",bg:"blue.500"}),e.jsx(r,{h:"12",bg:"green.500"}),e.jsx(r,{h:"12",bg:"yellow.500"}),e.jsx(r,{h:"12",bg:"red.500"}),e.jsx(r,{h:"12",bg:"purple.500"})]}),parameters:{docs:{source:{code:m}}}};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Grid templateColumns="repeat(3, 4rem)" gap="4" {...args}>
      <GridItem h="12" bg="blue.500" />
      <GridItem h="12" bg="green.500" />
      <GridItem h="12" bg="yellow.500" />
      <GridItem h="12" bg="red.500" />
      <GridItem h="12" bg="purple.500" />
    </Grid>,
  parameters: {
    docs: {
      source: {
        code: gridString
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const l=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{c as G,t as P};
