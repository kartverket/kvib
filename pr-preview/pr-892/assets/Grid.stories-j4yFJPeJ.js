import{j as r}from"./extends-CwFRzn3r.js";import{G as i}from"./grid-DbabZME7.js";import{f as K}from"./forward-ref-BWI-Phbn.js";import{a as _,c as F}from"./factory-lWLPzty5.js";import{m as k}from"./responsive-BbUtuhhZ.js";function d(a){return k(a,n=>n==="auto"?"auto":`span ${n}/span ${n}`)}const e=K(function(n,v){const{area:R,colSpan:y,colStart:j,colEnd:I,rowEnd:C,rowSpan:A,rowStart:T,...V}=n,E=_({gridArea:R,gridColumn:d(y),gridRow:d(A),gridColumnStart:j,gridColumnEnd:I,gridRowStart:T,gridRowEnd:C});return r.jsx(F.div,{ref:v,__css:E,...V})});e.displayName="GridItem";const H={title:"Layout/Grid",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},o={args:{templateColumns:"repeat(5, 1fr)",gap:4,minH:"2rem",minW:"12rem"},render:a=>r.jsxs(i,{...a,children:[r.jsx(e,{w:"100%",h:"10",bg:"blue.500"}),r.jsx(e,{w:"100%",h:"10",bg:"blue.500"}),r.jsx(e,{w:"100%",h:"10",bg:"blue.500"}),r.jsx(e,{w:"100%",h:"10",bg:"blue.500"}),r.jsx(e,{w:"100%",h:"10",bg:"blue.500"})]})},t={args:{h:"200px",templateRows:"repeat(2, 1fr)",templateColumns:"repeat(5, 1fr)",gap:4},render:a=>r.jsxs(i,{...a,children:[r.jsx(e,{rowSpan:2,colSpan:1,bg:"red.400"}),r.jsx(e,{colSpan:2,bg:"orange.200"}),r.jsx(e,{colSpan:2,bg:"orange.200"}),r.jsx(e,{colSpan:4,bg:"red.400"})]})},s={args:{templateColumns:"repeat(5, 1fr)",gap:4},render:a=>r.jsxs(i,{...a,children:[r.jsx(e,{colSpan:2,h:"10",bg:"red.400"}),r.jsx(e,{colStart:4,colEnd:6,h:"10",bg:"orange.200"})]})},p={args:{templateAreas:`"header header"
                  "nav main"
                  "nav footer"`,gridTemplateRows:"50px 1fr 30px",gridTemplateColumns:"150px 1fr",h:"200px",gap:"1",color:"black",fontWeight:"bold"},render:a=>r.jsxs(i,{...a,children:[r.jsx(e,{pl:"2",bg:"orange.300",area:"header",children:"Header"}),r.jsx(e,{pl:"2",bg:"pink.300",area:"nav",children:"Nav"}),r.jsx(e,{pl:"2",bg:"green.300",area:"main",children:"Main"}),r.jsx(e,{pl:"2",bg:"blue.300",area:"footer",children:"Footer"})]})};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,G,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    templateColumns: "repeat(5, 1fr)",
    gap: 4
  },
  render: args => <KvibGrid {...args}>
      <GridItem colSpan={2} h="10" bg="red.400" />
      <GridItem colStart={4} colEnd={6} h="10" bg="orange.200" />
    </KvibGrid>
}`,...(x=(G=s.parameters)==null?void 0:G.docs)==null?void 0:x.source}}};var S,f,w;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const P=["Preview","GridSpanning","GridStartEnd","GridTemplateAreas"],z=Object.freeze(Object.defineProperty({__proto__:null,GridSpanning:t,GridStartEnd:s,GridTemplateAreas:p,Preview:o,__namedExportsOrder:P,default:H},Symbol.toStringTag,{value:"Module"}));export{z as G,o as P,t as a,s as b,p as c};
