import{j as a}from"./extends-CwFRzn3r.js";import{F as s}from"./FileUpload-Blmm0kp1.js";import{S as l}from"./chunk-ZHMYA64R-V_96TD_T.js";const S={title:"Skjemaelementer/File Upload",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{type:{description:"Input type",table:{type:{summary:"file"},defaultValue:{summary:"file"}},options:["file"],control:{type:"radio"}},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},r={args:{},render:e=>a.jsx(s,{...e})},i={args:{},render:e=>a.jsxs(l,{gap:4,children:[a.jsx(s,{...e,variant:"outline"}),a.jsx(s,{...e,variant:"filled"}),a.jsx(s,{...e,variant:"flushed"}),a.jsx(s,{...e,variant:"unstyled"})]})},t={args:{},render:e=>a.jsxs(l,{gap:4,children:[a.jsx(s,{...e,size:"xs"}),a.jsx(s,{...e,size:"sm"}),a.jsx(s,{...e,size:"md"}),a.jsx(s,{...e,size:"lg"})]})},o={args:{},render:e=>a.jsxs(l,{gap:4,children:[a.jsx(s,{...e}),a.jsx(s,{...e,isDisabled:!0}),a.jsx(s,{...e,isInvalid:!0})]})};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibFileUpload {...args} />
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap={4}>
      <KvibFileUpload {...args} variant={"outline"} />
      <KvibFileUpload {...args} variant={"filled"} />
      <KvibFileUpload {...args} variant={"flushed"} />
      <KvibFileUpload {...args} variant={"unstyled"} />
    </Stack>
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap={4}>
      <KvibFileUpload {...args} size={"xs"} />
      <KvibFileUpload {...args} size={"sm"} />
      <KvibFileUpload {...args} size={"md"} />
      <KvibFileUpload {...args} size={"lg"} />
    </Stack>
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,x,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap={4}>
      <KvibFileUpload {...args} />
      <KvibFileUpload {...args} isDisabled />
      <KvibFileUpload {...args} isInvalid />
    </Stack>
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const j=["FileUpload","Variant","Size","State"],K=Object.freeze(Object.defineProperty({__proto__:null,FileUpload:r,Size:t,State:o,Variant:i,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{K as F,t as S,i as V,o as a,r as b};
