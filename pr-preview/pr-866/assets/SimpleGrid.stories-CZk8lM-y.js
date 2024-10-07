import{j as e}from"./extends-CwFRzn3r.js";import{S as p}from"./chunk-NEK3OOAM-DbYvnad0.js";import{B as r}from"./chunk-PULVB27S-CgiffgmI.js";const y={title:"Layout/SimpleGrid",component:p,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},columns:{description:"The number of columns",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},minChildWidth:{description:"The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},spacing:{description:"The gap between the grid items",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},spacingX:{description:"The column gap between the grid items",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},spacingY:{description:"The row gap between the grid items",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},t={args:{columns:3,spacing:10},render:o=>e.jsxs(p,{...o,children:[e.jsx(r,{bg:"green.100",height:"80px"}),e.jsx(r,{bg:"green.100",height:"80px"}),e.jsx(r,{bg:"green.100",height:"80px"}),e.jsx(r,{bg:"green.100",height:"80px"}),e.jsx(r,{bg:"green.100",height:"80px"})]})},s={args:{columns:[2,null,3],spacing:5},render:o=>e.jsxs(p,{...o,children:[e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"})]})},i={args:{minChildWidth:"120px",spacing:"40px"},render:o=>e.jsxs(p,{...o,children:[e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"})]})},n={args:{columns:2,spacingX:"60px",spacingY:"10px"},render:o=>e.jsxs(p,{...o,children:[e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"})]})};var a,g,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    columns: 3,
    spacing: 10
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
      <Box bg="green.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var x,h,m;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns: [2, null, 3],
    spacing: 5
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var d,u,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    minChildWidth: "120px",
    spacing: "40px"
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var b,B,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: 2,
    spacingX: "60px",
    spacingY: "10px"
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const v=["SimpleGrid","SimpleGridResponsiveArray","SimpleGridResponsive","SimpleGridSpacing"],w=Object.freeze(Object.defineProperty({__proto__:null,SimpleGrid:t,SimpleGridResponsive:i,SimpleGridResponsiveArray:s,SimpleGridSpacing:n,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{w as S,s as a,i as b,n as c,t as d};
