import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a7 as o,a8 as n}from"./index-BmmIebgE.js";const i={title:"Komponenter/Field",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},readOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}};o.displayName="Field";n.displayName="Input";const e={args:{label:"Label",helperText:"Helper text"},render:s=>r.jsx(o,{...s,children:r.jsx(n,{})})};var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Helper text"
  },
  render: (args: FieldProps) => <KvibFormControl {...args}>
      <KvibInput />
    </KvibFormControl>
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const d=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{m as F,e as P};
