import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as b}from"./index-CcKhGcwW.js";import{u as y}from"./use-recipe-CWoigbDD.js";import{N as f,a as h,b as g,c as x,d as v}from"./number-input-rPUDxFd5.js";const u=b.forwardRef(function(o,i){const{children:m,...p}=o,a=y({key:"numberInput"}),[d]=a.splitVariantProps(o),c=a(d);return e.jsxs(f,{ref:i,...p,css:c,children:[m,e.jsxs(h,{children:[e.jsx(g,{}),e.jsx(x,{})]})]})}),I=v,N={title:"Komponenter/Number Input",component:u,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{max:{description:"Maximum value of the counter",table:{type:{summary:"number"}},control:"text"},min:{description:"Minimum value of the counter",table:{type:{summary:"number"}},control:"text"},clampValueOnBlur:{description:"This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},precision:{description:"The number of decimal points used to round the value.",table:{type:{summary:"number"}},control:"text"},keepWithinRange:{description:"Toggles if value should be kept within the range of max and min.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},step:{description:"The step used to increment of decrement the value.",table:{type:{summary:"number"}},control:"text"},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},allowMouseWheel:{description:"If true, the input's value will change based on mouse wheel scrolling",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},readOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},t={args:{variant:"outline",defaultValue:3507},render:r=>e.jsx(u,{...r,children:e.jsx(I,{})})};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    defaultValue: 3507
  },
  render: (args: NumberInputProps) => <KvibNumberInput {...args}>
      <NumberInputField />
    </KvibNumberInput>
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const V=["Preview"],R=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{R as N,t as P};
