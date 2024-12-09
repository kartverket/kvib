import{j as e}from"./index-D6_wGsWO.js";import{G as p,c as r}from"./index-CWMfHjhQ.js";const f={title:"Komponenter/Grid",component:p,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},n={args:{templateColumns:"repeat(5, 1fr)",gap:4,minH:"2rem",minW:"12rem"},render:a=>e.jsxs(p,{...a,children:[e.jsx(r,{w:"100%",h:"10",bg:"blue.500"}),e.jsx(r,{w:"100%",h:"10",bg:"blue.500"}),e.jsx(r,{w:"100%",h:"10",bg:"blue.500"}),e.jsx(r,{w:"100%",h:"10",bg:"blue.500"}),e.jsx(r,{w:"100%",h:"10",bg:"blue.500"})]})},o={args:{h:"200px",templateRows:"repeat(2, 1fr)",templateColumns:"repeat(5, 1fr)",gap:4},render:a=>e.jsxs(p,{...a,children:[e.jsx(r,{rowSpan:2,colSpan:1,bg:"red.400"}),e.jsx(r,{colSpan:2,bg:"orange.200"}),e.jsx(r,{colSpan:2,bg:"orange.200"}),e.jsx(r,{colSpan:4,bg:"red.400"})]})},t={args:{templateColumns:"repeat(5, 1fr)",gap:4},render:a=>e.jsxs(p,{...a,children:[e.jsx(r,{colSpan:2,h:"10",bg:"red.400"}),e.jsx(r,{colStart:4,colEnd:6,h:"10",bg:"orange.200"})]})},s={args:{templateAreas:`"header header"
                  "nav main"
                  "nav footer"`,gridTemplateRows:"50px 1fr 30px",gridTemplateColumns:"150px 1fr",h:"200px",gap:"1",color:"black",fontWeight:"bold"},render:a=>e.jsxs(p,{...a,children:[e.jsx(r,{pl:"2",bg:"orange.300",area:"header",children:"Header"}),e.jsx(r,{pl:"2",bg:"pink.300",area:"nav",children:"Nav"}),e.jsx(r,{pl:"2",bg:"green.300",area:"main",children:"Main"}),e.jsx(r,{pl:"2",bg:"blue.300",area:"footer",children:"Footer"})]})};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    templateColumns: "repeat(5, 1fr)",
    gap: 4,
    minH: "2rem",
    minW: "12rem"
  },
  render: args => <KvibGrid {...args}>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </KvibGrid>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,g,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    h: "200px",
    templateRows: "repeat(2, 1fr)",
    templateColumns: "repeat(5, 1fr)",
    gap: 4
  },
  render: args => <KvibGrid {...args}>
      <GridItem rowSpan={2} colSpan={1} bg="red.400" />
      <GridItem colSpan={2} bg="orange.200" />
      <GridItem colSpan={2} bg="orange.200" />
      <GridItem colSpan={4} bg="red.400" />
    </KvibGrid>
}`,...(c=(g=o.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var u,b,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    templateColumns: "repeat(5, 1fr)",
    gap: 4
  },
  render: args => <KvibGrid {...args}>
      <GridItem colSpan={2} h="10" bg="red.400" />
      <GridItem colStart={4} colEnd={6} h="10" bg="orange.200" />
    </KvibGrid>
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var G,x,S;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    templateAreas: \`"header header"
                  "nav main"
                  "nav footer"\`,
    gridTemplateRows: "50px 1fr 30px",
    gridTemplateColumns: "150px 1fr",
    h: "200px",
    gap: "1",
    color: "black",
    fontWeight: "bold"
  },
  render: args => <KvibGrid {...args}>
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </KvibGrid>
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const w=["Preview","GridSpanning","GridStartEnd","GridTemplateAreas"],R=Object.freeze(Object.defineProperty({__proto__:null,GridSpanning:o,GridStartEnd:t,GridTemplateAreas:s,Preview:n,__namedExportsOrder:w,default:f},Symbol.toStringTag,{value:"Module"}));export{R as G,n as P,o as a,t as b,s as c};
