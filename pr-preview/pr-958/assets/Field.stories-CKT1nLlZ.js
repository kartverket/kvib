import{j as o}from"./index-Bqoz-m_F.js";import{ak as a,ae as n}from"./index-DuafSpvy.js";const i={title:"Komponenter/Field",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},readOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},e={render:s=>o.jsx(a,{label:"Label (valgfri)",helperText:"Hjelpetekst",...s,children:o.jsx(n,{placeholder:"Eksempel",size:"md",variant:"outline"})})};var r,l,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: FieldProps) => <KvibFormControl label={"Label (valgfri)"} helperText={"Hjelpetekst"} {...args}>
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
    </KvibFormControl>
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const d=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{m as F,e as P};
