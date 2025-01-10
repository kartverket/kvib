import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{H as r}from"./highlight-1aJWy0t8.js";import{B as u}from"./box-DTgFSJnn.js";import{H as v}from"./heading-3GHir9VO.js";import{T as l}from"./text-crSlOW4Q.js";const x={title:"Komponenter/Highlight",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{query:{name:"query*",description:"The highlighted word",table:{type:{summary:"string | string[]"}},control:"text"},styles:{description:"The style for the highlighted word",table:{type:{summary:"SystemStyleObject"}}}}};r.displayName="Highlight";const i={args:{query:"Highlight",styles:{px:"1",py:"1",bg:"orange.100"}},render:t=>e.jsx(u,{textAlign:"center",children:e.jsx(r,{...t,children:"Highlight content"})})},n={args:{query:["skjøte","hjemmelserklæring","hjemmelsoverføring"],styles:{px:"2",py:"1",rounded:"full",bg:"teal.100"}},render:t=>e.jsx(v,{lineHeight:"tall",size:"lg",children:e.jsx(r,{...t,children:"Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og uskifte, eller hjemmelsoverføring til andel i borettslag."})})},s={args:{query:"kart",styles:{py:"1",fontWeight:"normal"}},render:t=>e.jsxs(u,{children:[e.jsx(l,{children:'Søkeresultat for: "kart"'}),e.jsx(l,{mt:"6",fontWeight:"bold",children:e.jsx(r,{...t,children:"Kartverket"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(r,{...t,children:"Sjøkart"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(r,{...t,children:"Marint kartarbeid"})})]})};var g,o,a;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    query: "Highlight",
    styles: {
      px: "1",
      py: "1",
      bg: "orange.100"
    }
  },
  render: args => <Box textAlign={"center"}>
      <KvibHighlight {...args}>Highlight content</KvibHighlight>
    </Box>
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var h,d,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    query: ["skjøte", "hjemmelserklæring", "hjemmelsoverføring"],
    styles: {
      px: "2",
      py: "1",
      rounded: "full",
      bg: "teal.100"
    }
  },
  render: args => <KvibHeading lineHeight="tall" size="lg">
      <KvibHighlight {...args}>
        Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og
        uskifte, eller hjemmelsoverføring til andel i borettslag.
      </KvibHighlight>
    </KvibHeading>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,b,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    query: "kart",
    styles: {
      py: "1",
      fontWeight: "normal"
    }
  },
  render: args => <KvibBox>
      <KvibText>Søkeresultat for: "kart"</KvibText>
      <KvibText mt="6" fontWeight="bold">
        <KvibHighlight {...args}>Kartverket</KvibHighlight>
      </KvibText>
      <KvibText fontWeight="bold">
        <KvibHighlight {...args}>Sjøkart</KvibHighlight>
      </KvibText>
      <KvibText fontWeight="bold">
        <KvibHighlight {...args}>Marint kartarbeid</KvibHighlight>
      </KvibText>
    </KvibBox>
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const y=["Preview","HighlightMultiple","HighlightSubstring"],S=Object.freeze(Object.defineProperty({__proto__:null,HighlightMultiple:n,HighlightSubstring:s,Preview:i,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{S as H,i as P};
