import{j as s}from"./extends-CwFRzn3r.js";import{C as r}from"./chunk-37N6GCLA-D1CkRx4c.js";import{S as u}from"./chunk-ZHMYA64R-V_96TD_T.js";const d={title:"Skjemaelementer/Close Button",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},isDisabled:{description:"If true, the button will be disabled.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:"boolean"}}},t={args:{},render:e=>s.jsx(r,{...e})},o={args:{},render:e=>s.jsxs(u,{direction:"row",spacing:6,children:[s.jsx(r,{...e,size:"sm"}),s.jsx(r,{...e,size:"md"}),s.jsx(r,{...e,size:"lg"})]})};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibCloseButton {...args} />
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack direction="row" spacing={6}>
      <KvibCloseButton {...args} size="sm" />
      <KvibCloseButton {...args} size="md" />
      <KvibCloseButton {...args} size="lg" />
    </KvibStack>
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const p=["CloseButton","CloseButtonSizes"],B=Object.freeze(Object.defineProperty({__proto__:null,CloseButton:t,CloseButtonSizes:o,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{B as C,t as a,o as b};
