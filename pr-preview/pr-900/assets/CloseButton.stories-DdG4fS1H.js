import{j as s}from"./extends-CwFRzn3r.js";import{C as r}from"./close-button-CK4MGrTr.js";import{S as u}from"./stack-C3a7yBZW.js";const d={title:"Komponenter/Close Button",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},isDisabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},o={render:e=>s.jsx(r,{...e})},t={render:e=>s.jsxs(u,{direction:"row",spacing:6,children:[s.jsx(r,{...e,size:"sm"}),s.jsx(r,{...e,size:"md"}),s.jsx(r,{...e,size:"lg"})]})};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <KvibCloseButton {...args} />
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <KvibStack direction="row" spacing={6}>
      <KvibCloseButton {...args} size="sm" />
      <KvibCloseButton {...args} size="md" />
      <KvibCloseButton {...args} size="lg" />
    </KvibStack>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const p=["Preview","CloseButtonSizes"],f=Object.freeze(Object.defineProperty({__proto__:null,CloseButtonSizes:t,Preview:o,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{f as C,o as P,t as a};
