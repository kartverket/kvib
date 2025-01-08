import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{aw as l,ax as u}from"./index-CRrqj8Jn.js";const s={title:"Komponenter/Number Input",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{max:{description:"Maximum value of the counter",table:{type:{summary:"number"}},control:"text"},min:{description:"Minimum value of the counter",table:{type:{summary:"number"}},control:"text"},clampValueOnBlur:{description:"This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},step:{description:"The step used to increment of decrement the value.",table:{type:{summary:"number"}},control:"text"},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | subtle | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","subtle","flushed"],control:{type:"radio"}},allowMouseWheel:{description:"If true, the input's value will change based on mouse wheel scrolling",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},readOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},e={args:{variant:"outline",defaultValue:"3507"},render:n=>t.jsx(l,{...n,children:t.jsx(u,{})})};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    defaultValue: "3507"
  },
  render: (args: NumberInputProps) => <KvibNumberInput {...args}>
      <NumberInputField />
    </KvibNumberInput>
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const i=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{p as N,e as P};
