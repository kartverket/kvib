import{j as s}from"./index-D6_wGsWO.js";import{z as i,d as b}from"./index-80IJmMl9.js";const k={title:"Komponenter/Heading",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"The Size of the Heading",table:{type:{summary:"4xl | 3xl | 2xl | xl | lg | md | sm | xs"},defaultValue:{summary:"xl"}},options:["4xl","3xl","2xl","xl","lg","md","sm","xs"],control:{type:"select"}}}},n={args:{textAlign:"center"},render:e=>s.jsx(i,{...e,children:"Dette er en overskrift"})},r={args:{},render:e=>s.jsxs(b,{spacing:6,children:[s.jsx(i,{...e,as:"h1",size:"4xl",noOfLines:1,children:"(4xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h2",size:"3xl",noOfLines:1,children:"(3xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h2",size:"2xl",noOfLines:1,children:"(2xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h2",size:"xl",children:"(xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h3",size:"lg",children:"(lg) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h4",size:"md",children:"(md) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h5",size:"sm",children:"(sm) Kartverkets interaksjon- og designbibliotek"}),s.jsx(i,{...e,as:"h6",size:"xs",children:"(xs) Kartverkets interaksjon- og designbibliotek"})]})};var a,t,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    textAlign: "center"
  },
  render: args => <KvibHeading {...args}>Dette er en overskrift</KvibHeading>
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var g,d,l;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack spacing={6}>
      <KvibHeading {...args} as="h1" size="4xl" noOfLines={1}>
        (4xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="3xl" noOfLines={1}>
        (3xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="2xl" noOfLines={1}>
        (2xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="xl">
        (xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h3" size="lg">
        (lg) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h4" size="md">
        (md) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h5" size="sm">
        (sm) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h6" size="xs">
        (xs) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
    </KvibStack>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const x=["Preview","HeadingSizes"],K=Object.freeze(Object.defineProperty({__proto__:null,HeadingSizes:r,Preview:n,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{K as H,n as P,r as a};
