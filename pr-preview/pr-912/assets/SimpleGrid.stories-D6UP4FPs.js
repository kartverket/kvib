import{j as e}from"./jsx-runtime-CQsLhzk5.js";import"./slider-Bgj0f888.js";import{S as i}from"./simple-grid-DRjr5Irv.js";import{B as r}from"./box-CwJKB2Ex.js";const y={title:"Komponenter/Simple Grid",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},columns:{description:"The number of columns",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},minChildWidth:{description:"The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},t={args:{columns:3,gap:5},render:o=>e.jsxs(i,{...o,children:[e.jsx(r,{bg:"green.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"blue.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"red.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"orange.100",w:"2rem",h:"2rem"}),e.jsx(r,{bg:"purple.100",w:"2rem",h:"2rem"})]})},p={args:{columns:[2,null,3],gap:5},render:o=>e.jsxs(i,{...o,children:[e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"}),e.jsx(r,{bg:"blue.100",height:"80px"})]})},s={args:{minChildWidth:"120px",gap:"40px"},render:o=>e.jsxs(i,{...o,children:[e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"}),e.jsx(r,{bg:"red.100",height:"80px"})]})},n={args:{columns:2,gapX:"60px",gapY:"10px"},render:o=>e.jsxs(i,{...o,children:[e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"}),e.jsx(r,{bg:"purple.100",height:"80px"})]})};var a,l,g;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 5
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="green.100" w="2rem" h="2rem" />
      <Box bg="blue.100" w="2rem" h="2rem" />
      <Box bg="red.100" w="2rem" h="2rem" />
      <Box bg="orange.100" w="2rem" h="2rem" />
      <Box bg="purple.100" w="2rem" h="2rem" />
    </KvibSimpleGrid>
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,x,h;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columns: [2, null, 3],
    gap: 5
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
      <Box bg="blue.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(h=(x=p.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var d,u,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    minChildWidth: "120px",
    gap: "40px"
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
      <Box bg="red.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var c,S,B;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    columns: 2,
    gapX: "60px",
    gapY: "10px"
  },
  render: args => <KvibSimpleGrid {...args}>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
      <Box bg="purple.100" height="80px"></Box>
    </KvibSimpleGrid>
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const v=["Preview","SimpleGridResponsiveArray","SimpleGridResponsive","SimpleGridSpacing"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,SimpleGridResponsive:s,SimpleGridResponsiveArray:p,SimpleGridSpacing:n,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{t as P,f as S,p as a,s as b,n as c};
