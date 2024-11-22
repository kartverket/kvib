import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{H as t}from"./highlight-Czu-ouLi.js";import{B as p}from"./box-C9nK2UO9.js";import{H as v}from"./heading-D7346gVA.js";import{T as l}from"./text-DJW8V014.js";const f={title:"Komponenter/Highlight",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{query:{name:"query*",description:"The highlighted word",table:{type:{summary:"string | string[]"}},control:"text"},styles:{description:"The style for the highlighted word",table:{type:{summary:"SystemStyleObject"}}}}},i={args:{query:"fremheve",styles:{px:"1",py:"1",bg:"orange.100"}},render:r=>e.jsx(p,{textAlign:"center",children:e.jsx(t,{...r,children:"Det er mulig å fremheve ord med Highlight."})})},n={args:{query:["skjøte","hjemmelserklæring","hjemmelsoverføring"],styles:{px:"2",py:"1",rounded:"full",bg:"teal.100"}},render:r=>e.jsx(v,{lineHeight:"tall",size:"lg",children:e.jsx(t,{...r,children:"Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og uskifte, eller hjemmelsoverføring til andel i borettslag."})})},s={args:{query:"kart",styles:{py:"1",fontWeight:"normal"}},render:r=>e.jsxs(p,{children:[e.jsx(l,{children:'Søkeresultat for: "kart"'}),e.jsx(l,{mt:"6",fontWeight:"bold",children:e.jsx(t,{...r,children:"Kartverket"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(t,{...r,children:"Sjøkart"})}),e.jsx(l,{fontWeight:"bold",children:e.jsx(t,{...r,children:"Marint kartarbeid"})})]})};var g,o,a;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const x=["Preview","HighlightMultiple","HighlightSubstring"],S=Object.freeze(Object.defineProperty({__proto__:null,HighlightMultiple:n,HighlightSubstring:s,Preview:i,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{S as H,i as P,n as a,s as b};
