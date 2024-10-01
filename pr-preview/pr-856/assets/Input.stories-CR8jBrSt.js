import{j as e}from"./extends-CwFRzn3r.js";import{I as n}from"./chunk-6CVSDS6C-DIHhJ7ei.js";import{S as y}from"./chunk-ZHMYA64R-V_96TD_T.js";import{F as S}from"./Form-control-CG1fyGaW.js";import{F as x}from"./Form-label-D-r0Q-vl.js";import{I as i}from"./chunk-FKYN3ZGE-BSfnIADt.js";import{I as j}from"./chunk-2ZHRCML3-C0-oR7ek.js";import{I as K}from"./Icon-BhvPdM64.js";import{I as k,a as F}from"./chunk-ADBZ7YHX-DtzNszsZ.js";const R={title:"Skjemaelementer/Input",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{},render:r=>e.jsx(n,{placeholder:"Skriv her...",...r})},o={args:{placeholder:"Skriv her...",colorScheme:"green"},render:r=>e.jsxs(y,{h:"12rem",children:[e.jsx(n,{...r,variant:"outline"}),e.jsx(n,{...r,variant:"filled"}),e.jsx(n,{...r,variant:"flushed"}),e.jsx(n,{...r,variant:"unstyled"})]})},t={args:{},render:r=>e.jsxs(S,{isRequired:!0,children:[e.jsx(x,{children:"Fornavn"}),e.jsx(n,{autoComplete:"given-name",...r})]})},s={args:{},render:r=>e.jsxs(y,{gap:"1rem",children:[e.jsxs(i,{...r,children:[e.jsx(n,{placeholder:"Skriv her..."}),e.jsx(j,{children:e.jsx(K,{icon:"add"})})]}),e.jsxs(i,{...r,children:[e.jsx(k,{children:"https://"}),e.jsx(n,{placeholder:"minside"}),e.jsx(F,{children:".no"})]})]})};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {},
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
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,b,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControl isRequired>
      <FormLabel>Fornavn</FormLabel>
      <KvibInput autoComplete="given-name" {...args} />
    </FormControl>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,I,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
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
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const V=["Input","InputVariants","InputForm","InputGroup"],z=Object.freeze(Object.defineProperty({__proto__:null,Input:a,InputForm:t,InputGroup:s,InputVariants:o,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{z as I,o as a,t as b,s as c,a as d};
