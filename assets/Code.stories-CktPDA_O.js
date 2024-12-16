import{j as r}from"./index-D6_wGsWO.js";import{C as t,d as p}from"./index-BIL3J8Um.js";const u={title:"Komponenter/Code",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{variant:{description:"The variant of the badge",table:{type:{summary:"solid | subtle | outline"},defaultValue:{summary:"subtle"}},options:["solid","subtle","outline"],control:"radio"},colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:"green | blue | red | gray | orange"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray","orange"],control:"radio"}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>r.jsx(t,{...e,children:"$ npm install @kvib/react"})},o={args:{width:"fit-content"},render:e=>r.jsxs(p,{gap:"1rem",children:[r.jsx(t,{...e,children:"console.log(kartverket)",variant:"subtle"}),r.jsx(t,{...e,colorPalette:"blue",children:"Hello world",variant:"outline"}),r.jsx(t,{...e,colorPalette:"red",children:"var kartverket = 'Hønefoss'",variant:"solid"})]})};var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibCode {...args}>$ npm install @kvib/react</KvibCode>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    width: "fit-content"
  },
  render: args => <KvibStack gap="1rem">
      <KvibCode {...args} children="console.log(kartverket)" variant="subtle" />
      <KvibCode {...args} colorPalette="blue" children="Hello world" variant="outline" />
      <KvibCode {...args} colorPalette="red" children="var kartverket = 'Hønefoss'" variant="solid" />
    </KvibStack>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const m=["Preview","CodeAppearance"],g=Object.freeze(Object.defineProperty({__proto__:null,CodeAppearance:o,Preview:a,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{g as C,a as P};
