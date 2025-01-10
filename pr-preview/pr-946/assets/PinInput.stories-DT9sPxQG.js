import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{ay as t}from"./index-CoJY4uhr.js";const i={title:"Komponenter/Pin Input",component:t,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{mask:{description:"If true, the input's value will be masked just like `type=password`",table:{type:{summary:"boolean"}},control:"boolean"},otp:{description:'If true, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.',table:{type:{summary:"boolean"}},control:"boolean"},type:{description:"The type of values the pin-input should allow",table:{type:{summary:'"number" | "alphanumeric"'}},options:["number","alphanumeric"],control:{type:"radio"}},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}};t.displayName="PinInput";const e={render:s=>r.jsx(t,{...s})};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: PinInputProps) => <KvibPinInput {...args} />
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const l=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{d as P,e as a};
