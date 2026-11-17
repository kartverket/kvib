import{c as t,j as i}from"./iframe-B_C8pV-B.js";const s={title:"Komponenter/Layout/Container",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{centerContent:{description:"Center content inside container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},fluid:{description:"Use full width container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},maxWidth:{description:"Max width of container",table:{type:{summary:"string"}},control:{type:"text"}},p:{table:{disable:!0}},bg:{table:{disable:!0}}}};t.displayName="Container";const e={args:{bg:"green.50",p:"2"},render:a=>i.jsx(t,{...a,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl tristique nunc."})},l=["Preview"];var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    bg: "green.50",
    p: "2"
  },
  render: args => <KvibContainer {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl
      tristique nunc.
    </KvibContainer>
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{u as C,e as P};
