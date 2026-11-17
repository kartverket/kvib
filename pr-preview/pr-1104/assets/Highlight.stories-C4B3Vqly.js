import{aL as r,j as e,H as p,b as u,T as l}from"./iframe-Bsatxhr7.js";const v={title:"Komponenter/Highlight",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{query:{name:"query*",description:"The highlighted word",table:{type:{summary:"string | string[]"}},control:"text"},styles:{description:"The style for the highlighted word",table:{type:{summary:"SystemStyleObject"}}}}};r.displayName="Highlight";const i={args:{query:"Highlight",styles:{px:"1",py:"1",bg:"orange.100"}},render:t=>e.jsx(u,{textAlign:"center",children:e.jsx(r,{...t,children:"Highlight content"})})},n={args:{query:["skjøte","hjemmelserklæring","hjemmelsoverføring"],styles:{px:"2",py:"1",rounded:"full",bg:"teal.100"}},render:t=>e.jsx(p,{lineHeight:"tall",size:"lg",children:e.jsx(r,{...t,children:"Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og uskifte, eller hjemmelsoverføring til andel i borettslag."})})},s={args:{query:"kart",styles:{py:"1",fontWeight:"normal"}},render:t=>e.jsxs(u,{children:[e.jsx(l,{children:'Søkeresultat for: "kart"'}),e.jsx(l,{mt:"6",fontWeight:"bold",children:e.jsx(r,{...t,children:"Kartverket"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(r,{...t,children:"Sjøkart"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(r,{...t,children:"Marint kartarbeid"})})]})},y=["Preview","HighlightMultiple","HighlightSubstring"];var g,a,o;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var h,d,c;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,b,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const k=Object.freeze(Object.defineProperty({__proto__:null,HighlightMultiple:n,HighlightSubstring:s,Preview:i,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{k as H,i as P};
