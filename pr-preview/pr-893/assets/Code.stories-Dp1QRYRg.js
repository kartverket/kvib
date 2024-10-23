import{j as r}from"./extends-CwFRzn3r.js";import{C as t}from"./code-BjQELyKh.js";import{S as m}from"./stack-C3a7yBZW.js";const p={title:"Datavisning/Code",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{variant:{description:"The variant of the badge",table:{type:{summary:"solid | subtle | outline"},defaultValue:{summary:"subtle"}},options:["solid","subtle","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:"green | blue | red | gray | orange"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray","orange"],control:"radio"}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>r.jsx(t,{...e,children:"$ npm install @kvib/react"})},o={args:{width:"fit-content"},render:e=>r.jsxs(m,{gap:"1rem",children:[r.jsx(t,{...e,children:"console.log(kartverket)",variant:"subtle"}),r.jsx(t,{...e,colorScheme:"blue",children:"Hello world",variant:"outline"}),r.jsx(t,{...e,colorScheme:"red",children:"var kartverket = 'Hønefoss'",variant:"solid"})]})};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibCode {...args}>$ npm install @kvib/react</KvibCode>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: "fit-content"
  },
  render: args => <KvibStack gap="1rem">
      <KvibCode {...args} children="console.log(kartverket)" variant="subtle" />
      <KvibCode {...args} colorScheme="blue" children="Hello world" variant="outline" />
      <KvibCode {...args} colorScheme="red" children="var kartverket = 'Hønefoss'" variant="solid" />
    </KvibStack>
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const u=["Preview","CodeAppearance"],h=Object.freeze(Object.defineProperty({__proto__:null,CodeAppearance:o,Preview:a,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{h as C,a as P,o as a};
