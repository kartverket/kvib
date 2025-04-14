import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./container-DT0i0QV0.js";const s={title:"Komponenter/Layout/Container",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{centerContent:{description:"Center content inside container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},fluid:{description:"Use full width container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},maxWidth:{description:"Max width of container",table:{type:{summary:"string"}},control:{type:"text"}},p:{table:{disable:!0}},bg:{table:{disable:!0}}}};t.displayName="Container";const e={args:{bg:"green.50",p:"2"},render:a=>i.jsx(t,{...a,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl tristique nunc."})};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    bg: "green.50",
    p: "2"
  },
  render: args => <KvibContainer {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl
      tristique nunc.
    </KvibContainer>
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const l=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{m as C,e as P};
