import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{H as e}from"./index-BPSUUwHO.js";import{S as b}from"./stack-4ts2l5En.js";const k={title:"Komponenter/Heading",component:e,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"The Size of the Heading",table:{type:{summary:"4xl | 3xl | 2xl | xl | lg | md | sm | xs"},defaultValue:{summary:"xl"}},options:["4xl","3xl","2xl","xl","lg","md","sm","xs"],control:{type:"select"}}}};e.displayName="Heading";const n={args:{textAlign:"center"},render:i=>s.jsx(e,{...i,children:"Example header"})},a={args:{},render:i=>s.jsxs(b,{gap:6,children:[s.jsx(e,{...i,as:"h1",size:"4xl",lineClamp:1,children:"(4xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h2",size:"3xl",lineClamp:1,children:"(3xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h2",size:"2xl",lineClamp:1,children:"(2xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h2",size:"xl",children:"(xl) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h3",size:"lg",children:"(lg) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h4",size:"md",children:"(md) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h5",size:"sm",children:"(sm) Kartverkets interaksjon- og designbibliotek"}),s.jsx(e,{...i,as:"h6",size:"xs",children:"(xs) Kartverkets interaksjon- og designbibliotek"})]})};var r,t,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    textAlign: "center"
  },
  render: args => <KvibHeading {...args}>Example header</KvibHeading>
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,g,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack gap={6}>
      <KvibHeading {...args} as="h1" size="4xl" lineClamp={1}>
        (4xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="3xl" lineClamp={1}>
        (3xl) Kartverkets interaksjon- og designbibliotek
      </KvibHeading>
      <KvibHeading {...args} as="h2" size="2xl" lineClamp={1}>
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
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const x=["Preview","HeadingSizes"],K=Object.freeze(Object.defineProperty({__proto__:null,HeadingSizes:a,Preview:n,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{K as H,n as P,a};
