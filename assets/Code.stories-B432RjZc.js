import{j as r}from"./extends-CwFRzn3r.js";import{C as t}from"./code-pQQvL61V.js";import{S as m}from"./stack-BdCvkUuU.js";const p={title:"Komponenter/Code",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{variant:{description:"The variant of the badge",table:{type:{summary:"solid | subtle | outline"},defaultValue:{summary:"subtle"}},options:["solid","subtle","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:"green | blue | red | gray | orange"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray","orange"],control:"radio"}}},o={parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>r.jsx(t,{...e,children:"$ npm install @kvib/react"})},a={args:{width:"fit-content"},render:e=>r.jsxs(m,{gap:"1rem",children:[r.jsx(t,{...e,children:"console.log(kartverket)",variant:"subtle"}),r.jsx(t,{...e,colorScheme:"blue",children:"Hello world",variant:"outline"}),r.jsx(t,{...e,colorScheme:"red",children:"var kartverket = 'Hønefoss'",variant:"solid"})]})};var s,n,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibCode {...args}>$ npm install @kvib/react</KvibCode>
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    width: "fit-content"
  },
  render: args => <KvibStack gap="1rem">
      <KvibCode {...args} children="console.log(kartverket)" variant="subtle" />
      <KvibCode {...args} colorScheme="blue" children="Hello world" variant="outline" />
      <KvibCode {...args} colorScheme="red" children="var kartverket = 'Hønefoss'" variant="solid" />
    </KvibStack>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const u=["Preview","CodeAppearance"],h=Object.freeze(Object.defineProperty({__proto__:null,CodeAppearance:a,Preview:o,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{h as C,o as P,a};