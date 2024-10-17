import{j as r}from"./extends-CwFRzn3r.js";import{G as i}from"./grid-B2CMUJGq.js";import{f as K}from"./forward-ref-BWI-Phbn.js";import{a as _,c as F}from"./factory-C6UFhaBW.js";import{m as k}from"./responsive-BNzRyFLh.js";function l(o){return k(o,a=>a==="auto"?"auto":`span ${a}/span ${a}`)}const e=K(function(a,v){const{area:C,colSpan:R,colStart:y,colEnd:j,rowEnd:I,rowSpan:A,rowStart:T,...V}=a,E=_({gridArea:C,gridColumn:l(R),gridRow:l(A),gridColumnStart:y,gridColumnEnd:j,gridRowStart:T,gridRowEnd:I});return r.jsx(F.div,{ref:v,__css:E,...V})});e.displayName="GridItem";const P={title:"Layout/Grid",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{autoColumns:{description:"Shorthand prop for gridAutoColumns",table:{type:{summary:"ResponsiveValue<GridAutoColumns<0 | (string & {})>>"}},control:"text"},autoFlow:{description:"Shorthand prop for gridAutoFlow",table:{type:{summary:"ResponsiveValue<GridAutoFlow>"}},control:"text"},autoRows:{description:"Shorthand prop for gridAutoRows",table:{type:{summary:"ResponsiveValue<GridAutoRows<0 | (string & {})>>"}},control:"text"},column:{description:"Shorthand prop for gridColumn",table:{type:{summary:"ResponsiveValue<GridColumn>"}},control:"text"},columnGap:{description:"Shorthand prop for gridColumnGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},gap:{description:"Shorthand prop for gridGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"number"},row:{description:"Shorthand prop for gridRow",table:{type:{summary:"ResponsiveValue<GridRow>"}},control:"text"},rowGap:{description:"Shorthand prop for gridRowGap",table:{type:{summary:"ResponsiveValue<string | number | (string & {})>"}},control:"text"},templateAreas:{description:"Shorthand prop for gridTemplateAreas",table:{type:{summary:"ResponsiveValue<GridTemplateAreas>"}},control:"text"},templateColumns:{description:"Shorthand prop for gridTemplateColumns",table:{type:{summary:"ResponsiveValue<GridTemplateColumns<0 | (string & {})>>"}},control:"text"},templateRows:{description:"Shorthand prop for gridTemplateRows",table:{type:{summary:"ResponsiveValue<GridTemplateRows<0 | (string & {})>>"}},control:"text"}}},t={args:{templateColumns:"repeat(5, 1fr)",gap:6},render:o=>r.jsxs(i,{...o,children:[r.jsx(e,{w:"100%",h:10,bgColor:"blue.100"}),r.jsx(e,{w:"100%",h:10,bgColor:"blue.100"}),r.jsx(e,{w:"100%",h:10,bgColor:"blue.100"}),r.jsx(e,{w:"100%",h:10,bgColor:"blue.100"}),r.jsx(e,{w:"100%",h:10,bgColor:"blue.100"})]})},n={args:{h:"200px",templateRows:"repeat(2, 1fr)",templateColumns:"repeat(5, 1fr)",gap:4},render:o=>r.jsxs(i,{...o,children:[r.jsx(e,{rowSpan:2,colSpan:1,bg:"red.400"}),r.jsx(e,{colSpan:2,bg:"orange.200"}),r.jsx(e,{colSpan:2,bg:"orange.200"}),r.jsx(e,{colSpan:4,bg:"red.400"})]})},s={args:{templateColumns:"repeat(5, 1fr)",gap:4},render:o=>r.jsxs(i,{...o,children:[r.jsx(e,{colSpan:2,h:"10",bg:"red.400"}),r.jsx(e,{colStart:4,colEnd:6,h:"10",bg:"orange.200"})]})},p={args:{templateAreas:`"header header"
                  "nav main"
                  "nav footer"`,gridTemplateRows:"50px 1fr 30px",gridTemplateColumns:"150px 1fr",h:"200px",gap:"1",color:"black",fontWeight:"bold"},render:o=>r.jsxs(i,{...o,children:[r.jsx(e,{pl:"2",bg:"orange.300",area:"header",children:"Header"}),r.jsx(e,{pl:"2",bg:"pink.300",area:"nav",children:"Nav"}),r.jsx(e,{pl:"2",bg:"green.300",area:"main",children:"Main"}),r.jsx(e,{pl:"2",bg:"blue.300",area:"footer",children:"Footer"})]})};var d,m,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    templateColumns: "repeat(5, 1fr)",
    gap: 6
  },
  render: args => <KvibGrid {...args}>
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
      <GridItem w="100%" h={10} bgColor="blue.100" />
    </KvibGrid>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,u,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,G,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const M=["Preview","GridSpanning","GridStartEnd","GridTemplateAreas"],z=Object.freeze(Object.defineProperty({__proto__:null,GridSpanning:n,GridStartEnd:s,GridTemplateAreas:p,Preview:t,__namedExportsOrder:M,default:P},Symbol.toStringTag,{value:"Module"}));export{z as G,t as P,n as a,s as b,p as c};
