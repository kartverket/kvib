import{j as e}from"./extends-CwFRzn3r.js";import{I as n}from"./input-sbpWslp1.js";import{S as y}from"./stack-BdCvkUuU.js";import{F as S}from"./Form-control-DDEvLp3l.js";import{F as x}from"./Form-label-CcuP-A5M.js";import{I as i}from"./input-group-CqctEj_1.js";import{I as j}from"./input-element-CK5PPXey.js";import{I as K}from"./Icon-AWJq4l__.js";import{I as F,a as k}from"./input-addon-C5TxTYFw.js";const R={title:"Komponenter/Input",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},render:r=>e.jsx(n,{placeholder:"Skriv her...",...r})},o={args:{placeholder:"Skriv her...",colorScheme:"green"},render:r=>e.jsxs(y,{h:"12rem",children:[e.jsx(n,{...r,variant:"outline"}),e.jsx(n,{...r,variant:"filled"}),e.jsx(n,{...r,variant:"flushed"}),e.jsx(n,{...r,variant:"unstyled"})]})},t={render:r=>e.jsxs(S,{isRequired:!0,children:[e.jsx(x,{children:"Fornavn"}),e.jsx(n,{autoComplete:"given-name",...r})]})},s={render:r=>e.jsxs(y,{gap:"1rem",children:[e.jsxs(i,{...r,children:[e.jsx(n,{placeholder:"Skriv her..."}),e.jsx(j,{children:e.jsx(K,{icon:"add"})})]}),e.jsxs(i,{...r,children:[e.jsx(F,{children:"https://"}),e.jsx(n,{placeholder:"minside"}),e.jsx(k,{children:".no"})]})]})};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibInput placeholder="Skriv her..." {...args} />
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Skriv her...",
    colorScheme: "green"
  },
  render: args => <Stack h="12rem">
      <KvibInput {...args} variant="outline" />
      <KvibInput {...args} variant="filled" />
      <KvibInput {...args} variant="flushed" />
      <KvibInput {...args} variant="unstyled" />
    </Stack>
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,b,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <FormControl isRequired>
      <FormLabel>Fornavn</FormLabel>
      <KvibInput autoComplete="given-name" {...args} />
    </FormControl>
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,I,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Stack gap="1rem">
      <KvibInputGroup {...args}>
        <KvibInput placeholder={"Skriv her..."} />
        <KvibInputRightElement>
          <KvibIcon icon={"add"} />
        </KvibInputRightElement>
      </KvibInputGroup>
      <KvibInputGroup {...args}>
        <KvibInputLeftAddon children={"https://"} />
        <KvibInput placeholder={"minside"} />
        <KvibInputRightAddon children={".no"} />
      </KvibInputGroup>
    </Stack>
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const V=["Preview","InputVariants","InputForm","InputGroup"],O=Object.freeze(Object.defineProperty({__proto__:null,InputForm:t,InputGroup:s,InputVariants:o,Preview:a,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{O as I,a as P,o as a,t as b,s as c};