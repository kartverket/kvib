import{j as r}from"./index-D6_wGsWO.js";import{aR as n}from"./index-4EABdPr2.js";const l={title:"Komponenter/Pin Input",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{manageFocus:{description:"If true, focus will move automatically to the next input once filled",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},mask:{description:"If true, the input's value will be masked just like `type=password`",table:{type:{summary:"boolean"}},control:"boolean"},otp:{description:'If true, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.',table:{type:{summary:"boolean"}},control:"boolean"},type:{description:"The type of values the pin-input should allow",table:{type:{summary:'"number" | "alphanumeric"'}},options:["number","alphanumeric"],control:{type:"radio"}},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},e={render:s=>r.jsx(n,{...s})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: PinInputProps) => <KvibPinInput {...args} />
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const i=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:l},Symbol.toStringTag,{value:"Module"}));export{m as P,e as a};
