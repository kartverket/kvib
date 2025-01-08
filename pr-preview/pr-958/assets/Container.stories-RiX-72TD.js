import{j as s}from"./index-Bqoz-m_F.js";import{c6 as o}from"./index-DuafSpvy.js";const i={title:"Komponenter/Layout/Container",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{centerContent:{description:"Center content inside container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},fluid:{description:"Use full width container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},p:{table:{disable:!0}},bg:{table:{disable:!0}}}},c=`
<Container>
  ...
</Container>
`,e={args:{bg:"green.50",p:"2"},render:a=>s.jsx(o,{...a,children:"Container content"}),parameters:{docs:{source:{code:c}}}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    bg: "green.50",
    p: "2"
  },
  render: args => <KvibContainer {...args}>Container content</KvibContainer>,
  parameters: {
    docs: {
      source: {
        code: containerString
      }
    }
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const l=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{m as C,e as P};
