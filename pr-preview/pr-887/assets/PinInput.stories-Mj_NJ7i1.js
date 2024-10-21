import{j as n}from"./extends-CwFRzn3r.js";import{H as t}from"./chunk-3ASUQ6PA-hlsAaDh7.js";import{P as s,a as e}from"./Pin-Input-Field-CaAS7sth.js";import{S as z}from"./stack-REYSnkee.js";const w={title:"Skjemaelementer/Pin Input",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{manageFocus:{description:"If true, focus will move automatically to the next input once filled",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},mask:{description:"If true, the input's value will be masked just like `type=password`",table:{type:{summary:"boolean"}},control:"boolean"},otp:{description:'If true, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.',table:{type:{summary:"boolean"}},control:"boolean"},type:{description:"The type of values the pin-input should allow",table:{type:{summary:'"number" | "alphanumeric"'}},options:["number","alphanumeric"],control:{type:"radio"}},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},r={render:i=>n.jsx(t,{children:n.jsxs(s,{...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},a={args:{type:"alphanumeric"},render:i=>n.jsx(t,{children:n.jsxs(s,{...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},o={args:{otp:!0},render:i=>n.jsx(t,{children:n.jsxs(s,{...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},l={args:{mask:!0,type:"alphanumeric"},render:i=>n.jsx(t,{children:n.jsxs(s,{...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},u={render:i=>n.jsxs(z,{children:[n.jsx(t,{children:n.jsxs(s,{size:"xs",...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})}),n.jsx("hr",{}),n.jsx(t,{children:n.jsxs(s,{size:"sm",...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})}),n.jsx("hr",{}),n.jsx(t,{children:n.jsxs(s,{size:"md",...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})}),n.jsx("hr",{}),n.jsx(t,{children:n.jsxs(s,{size:"lg",...i,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})]})},p={render:()=>n.jsx(t,{children:n.jsxs(s,{manageFocus:!1,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,x,P;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "alphanumeric"
  },
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var j,v,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    otp: true
  },
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var K,h,F;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    mask: true,
    type: "alphanumeric"
  },
  render: args => <HStack>
      <KvibPinInput {...args}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(F=(h=l.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var y,S,g;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Stack>
      <HStack>
        <KvibPinInput size={"xs"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"sm"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"md"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"lg"} {...args}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
    </Stack>
}`,...(g=(S=u.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var k,f,H;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <HStack>
      <KvibPinInput manageFocus={false}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(H=(f=p.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};const T=["Preview","Alphanumeric","OTP","Mask","Size","Focus"],A=Object.freeze(Object.defineProperty({__proto__:null,Alphanumeric:a,Focus:p,Mask:l,OTP:o,Preview:r,Size:u,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{a as A,p as F,l as M,o as O,A as P,u as S,r as a};
