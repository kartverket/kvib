import{j as n}from"./extends-CwFRzn3r.js";import{P as i,a as e}from"./Pin-Input-Field-BoNAG0R7.js";import{H as s}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{S as z}from"./chunk-ZHMYA64R-V_96TD_T.js";const T={title:"Skjemaelementer/Pin Input",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{manageFocus:{description:"If true, focus will move automatically to the next input once filled",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},mask:{description:"If true, the input's value will be masked just like `type=password`",table:{type:{summary:"boolean"}},control:"boolean"},otp:{description:'If true, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`.',table:{type:{summary:"boolean"}},control:"boolean"},type:{description:"The type of values the pin-input should allow",table:{type:{summary:'"number" | "alphanumeric"'}},options:["number","alphanumeric"],control:{type:"radio"}},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},r={args:{},render:t=>n.jsx(s,{children:n.jsxs(i,{...t,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},a={args:{type:"alphanumeric"},render:t=>n.jsx(s,{children:n.jsxs(i,{...t,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},o={args:{otp:!0},render:t=>n.jsx(s,{children:n.jsxs(i,{...t,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},l={args:{mask:!0,type:"alphanumeric"},render:t=>n.jsx(s,{children:n.jsxs(i,{...t,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})},u={args:{},render:t=>n.jsxs(z,{children:[n.jsx(s,{children:n.jsxs(i,{size:"xs",children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})}),n.jsx("hr",{}),n.jsx(s,{children:n.jsxs(i,{size:"sm",children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})}),n.jsx("hr",{}),n.jsx(s,{children:n.jsxs(i,{size:"md",children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})}),n.jsx("hr",{}),n.jsx(s,{children:n.jsxs(i,{size:"lg",children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})]})},p={render:()=>n.jsx(s,{children:n.jsxs(i,{manageFocus:!1,children:[n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{}),n.jsx(e,{})]})})};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
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
}`,...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var j,I,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var K,h,F;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(F=(h=l.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var g,y,S;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <HStack>
        <KvibPinInput size={"xs"}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"sm"}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"md"}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
      <hr />
      <HStack>
        <KvibPinInput size={"lg"}>
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
          <KvibPinInputField />
        </KvibPinInput>
      </HStack>
    </Stack>
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,f,H;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <HStack>
      <KvibPinInput manageFocus={false}>
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
        <KvibPinInputField />
      </KvibPinInput>
    </HStack>
}`,...(H=(f=p.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};const O=["PinInput","Alphanumeric","OTP","Mask","Size","Focus"],A=Object.freeze(Object.defineProperty({__proto__:null,Alphanumeric:a,Focus:p,Mask:l,OTP:o,PinInput:r,Size:u,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{a as A,p as F,l as M,o as O,A as P,u as S,r as a};
