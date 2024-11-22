import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as p}from"./index-CcKhGcwW.js";import{N as d,a as c,b,c as y,d as f}from"./number-input-C7V4mKPB.js";const l=p.forwardRef(function(u,s){const{children:i,...m}=u;return e.jsxs(d,{ref:s,variant:"outline",...m,children:[i,e.jsxs(c,{children:[e.jsx(b,{}),e.jsx(y,{})]})]})}),h=f,g={title:"Komponenter/Number Input",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{max:{description:"Maximum value of the counter",table:{type:{summary:"number"}},control:"text"},min:{description:"Minimum value of the counter",table:{type:{summary:"number"}},control:"text"},clampValueOnBlur:{description:"This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},precision:{description:"The number of decimal points used to round the value.",table:{type:{summary:"number"}},control:"text"},keepWithinRange:{description:"Toggles if value should be kept within the range of max and min.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},step:{description:"The step used to increment of decrement the value.",table:{type:{summary:"number"}},control:"text"},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},allowMouseWheel:{description:"If true, the input's value will change based on mouse wheel scrolling",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},readOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},t={args:{variant:"outline",defaultValue:3507},render:r=>e.jsx(l,{...r,children:e.jsx(h,{})})};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    defaultValue: 3507
  },
  render: (args: NumberInputProps) => <KvibNumberInput {...args}>
      <NumberInputField />
    </KvibNumberInput>
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const v=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{T as N,t as P};
