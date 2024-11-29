import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{k as t,l as i}from"./index-C7Oi3TOS.js";const n={title:"Komponenter/Field",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},e={render:a=>o.jsx(t,{label:"Label (valgfri)",helperText:"Hjelpetekst",errorMessage:"Feilmelding",...a,children:o.jsx(i,{placeholder:"Eksempel",size:"md",variant:"outline"})})};var r,l,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: FieldProps) => <KvibFormControl label={"Label (valgfri)"} helperText={"Hjelpetekst"} errorMessage={"Feilmelding"} {...args}>
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
    </KvibFormControl>
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const d=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:n},Symbol.toStringTag,{value:"Module"}));export{b as F,e as P};
