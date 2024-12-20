import{j as e}from"./index-D6_wGsWO.js";import{aR as t,B as v,z as p,T as l}from"./index-DFbqK9I0.js";const x={title:"Komponenter/Highlight",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{query:{name:"query*",description:"The highlighted word",table:{type:{summary:"string | string[]"}},control:"text"},styles:{description:"The style for the highlighted word",table:{type:{summary:"SystemStyleObject"}}}}},i={args:{query:"fremheve",styles:{px:"1",py:"1",bg:"orange.100"}},render:r=>e.jsx(v,{textAlign:"center",children:e.jsx(t,{...r,children:"Det er mulig å fremheve ord med Highlight."})})},n={args:{query:["skjøte","hjemmelserklæring","hjemmelsoverføring"],styles:{px:"2",py:"1",rounded:"full",bg:"teal.100"}},render:r=>e.jsx(p,{lineHeight:"tall",size:"lg",children:e.jsx(t,{...r,children:"Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og uskifte, eller hjemmelsoverføring til andel i borettslag."})})},s={args:{query:"kart",styles:{py:"1",fontWeight:"normal"}},render:r=>e.jsxs(v,{children:[e.jsx(l,{children:'Søkeresultat for: "kart"'}),e.jsx(l,{mt:"6",fontWeight:"bold",children:e.jsx(t,{...r,children:"Kartverket"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(t,{...r,children:"Sjøkart"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(t,{...r,children:"Marint kartarbeid"})})]})};var g,a,o;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    query: "fremheve",
    styles: {
      px: "1",
      py: "1",
      bg: "orange.100"
    }
  },
  render: args => <Box textAlign={"center"}>
      <KvibHighlight {...args}>Det er mulig å fremheve ord med Highlight.</KvibHighlight>
    </Box>
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var h,d,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,b,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const y=["Preview","HighlightMultiple","HighlightSubstring"],k=Object.freeze(Object.defineProperty({__proto__:null,HighlightMultiple:n,HighlightSubstring:s,Preview:i,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{k as H,i as P};
