import{j as e}from"./extends-CwFRzn3r.js";import{N as n,a as s,b as a}from"./Number-Input-Stepper-2YbDTngD.js";import{S as M}from"./stack-Crl0JO1i.js";import{F as w}from"./Form-control-DGJzYvuD.js";import{F as q}from"./Form-label-DGuXXNOx.js";const _={title:"Skjemaelementer/Number Input",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{max:{description:"Maximum value of the counter",table:{type:{summary:"number"}},control:"text"},min:{description:"Minimum value of the counter",table:{type:{summary:"number"}},control:"text"},clampValueOnBlur:{description:"This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},precision:{description:"The number of decimal points used to round the value.",table:{type:{summary:"number"}},control:"text"},keepWithinRange:{description:"Toggles if value should be kept within the range of max and min.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},step:{description:"The step used to increment of decrement the value.",table:{type:{summary:"number"}},control:"text"},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},allowMouseWheel:{description:"If true, the input's value will change based on mouse wheel scrolling",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},t={args:{variant:"outline",isDisabled:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{}),e.jsx(a,{})]})},u={args:{defaultValue:1234},render:r=>e.jsxs(M,{gap:5,children:[e.jsxs(n,{...r,variant:"outline",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsxs(n,{...r,variant:"filled",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsxs(n,{...r,variant:"flushed",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsxs(n,{...r,variant:"unstyled",children:[e.jsx(s,{}),e.jsx(a,{})]})]})},i={args:{},render:r=>e.jsxs(w,{isRequired:!0,children:[e.jsx(q,{children:"Årstall"}),e.jsxs(n,{...r,children:[e.jsx(s,{}),e.jsx(a,{})]})]})},l={args:{defaultValue:12,min:10,max:20},render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{}),e.jsx(a,{})]})},o={args:{precision:2},render:r=>e.jsxs(n,{...r,children:[e.jsx(s,{}),e.jsx(a,{})]})},m={render:()=>e.jsxs(M,{children:[e.jsxs(n,{size:"xs",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsx("hr",{}),e.jsxs(n,{size:"sm",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsx("hr",{}),e.jsxs(n,{size:"md",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsx("hr",{}),e.jsxs(n,{size:"lg",children:[e.jsx(s,{}),e.jsx(a,{})]})]})},p={args:{defaultValue:12,min:10,max:20},render:r=>e.jsxs(n,{...r,clampValueOnBlur:!1,children:[e.jsx(s,{}),e.jsx(a,{})]})};var b,d,c;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false
  },
  render: args => <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var v,I,N;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: 1234
  },
  render: args => <Stack gap={5}>
      <KvibNumberInput {...args} variant={"outline"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <KvibNumberInput {...args} variant={"filled"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <KvibNumberInput {...args} variant={"flushed"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <KvibNumberInput {...args} variant={"unstyled"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
    </Stack>
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var x,f,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControl isRequired>
      <FormLabel>Årstall</FormLabel>
      <KvibNumberInput {...args}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
    </FormControl>
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,K,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultValue: 12,
    min: 10,
    max: 20
  },
  render: args => <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
}`,...(j=(K=l.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var y,S,F;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    precision: 2
  },
  render: args => <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var V,z,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Stack>
      <KvibNumberInput size={"xs"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <hr />
      <KvibNumberInput size={"sm"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <hr />
      <KvibNumberInput size={"md"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
      <hr />
      <KvibNumberInput size={"lg"}>
        <KvibNumberInputField />
        <KvibNumberInputStepper />
      </KvibNumberInput>
    </Stack>
}`,...(R=(z=m.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var T,O,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultValue: 12,
    min: 10,
    max: 20
  },
  render: args => <KvibNumberInput {...args} clampValueOnBlur={false}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const B=["NumberInput","NumberInputVariants","NumberInputForm","NumberInputMinMaxValue","NumberInputPrecision","NumberInputSizes","NumberInputBlur"],W=Object.freeze(Object.defineProperty({__proto__:null,NumberInput:t,NumberInputBlur:p,NumberInputForm:i,NumberInputMinMaxValue:l,NumberInputPrecision:o,NumberInputSizes:m,NumberInputVariants:u,__namedExportsOrder:B,default:_},Symbol.toStringTag,{value:"Module"}));export{W as N,u as a,i as b,l as c,p as d,o as e,m as f,t as g};
