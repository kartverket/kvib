import{j as r}from"./extends-CwFRzn3r.js";import{S as s}from"./chunk-5PH6ULNP-B_hWxh7m.js";import{S as h}from"./chunk-ZHMYA64R-V_96TD_T.js";const v={title:"Tilbakemelding/Spinner",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{color:{description:"The color of the spinner",table:{type:{summary:"string"}},control:"text"},emptyColor:{description:"The color of the empty area in the spinner",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}},control:"text"},label:{description:"For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.",table:{type:{summary:"string"},defaultValue:{summary:"Loading..."}},control:"text"},size:{description:"The size of the Spinner",table:{type:{summary:"xs | sm | md | lg | xl"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl"],control:{type:"radio"}},speed:{description:"The speed of the spinner",table:{type:{summary:"string"},defaultValue:{summary:"0.45s"}},control:"text"},thickness:{description:"The thickness of the spinner",table:{type:{summary:"string"},defaultValue:{summary:"2px"}},control:"text"}}},n={args:{},render:e=>r.jsx(s,{...e})},a={args:{},render:e=>r.jsxs(h,{children:[r.jsx(s,{...e,color:"blue"}),r.jsx(s,{...e,color:"green"}),r.jsx(s,{...e,color:"red"}),r.jsx(s,{...e,color:"gray"})]})},o={args:{},render:e=>r.jsxs(h,{children:[r.jsx(s,{...e,size:"xl"}),r.jsx(s,{...e,size:"lg"}),r.jsx(s,{...e,size:"md"}),r.jsx(s,{...e,size:"sm"}),r.jsx(s,{...e,size:"xs"})]})},t={args:{size:"xl",emptyColor:"gray.200",speed:"0.65s",color:"green.500",thickness:"4px"},render:e=>r.jsx(s,{...e})};var i,p,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibSpinner {...args} />
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack>
      <KvibSpinner {...args} color="blue" />
      <KvibSpinner {...args} color="green" />
      <KvibSpinner {...args} color="red" />
      <KvibSpinner {...args} color="gray" />
    </KvibStack>
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack>
      <KvibSpinner {...args} size="xl" />
      <KvibSpinner {...args} size="lg" />
      <KvibSpinner {...args} size="md" />
      <KvibSpinner {...args} size="sm" />
      <KvibSpinner {...args} size="xs" />
    </KvibStack>
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var x,b,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "xl",
    emptyColor: "gray.200",
    speed: "0.65s",
    color: "green.500",
    thickness: "4px"
  },
  render: args => <KvibSpinner {...args} />
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const f=["Spinner","SpinnerColors","SpinnerSizes","SpinnerArea"],k=Object.freeze(Object.defineProperty({__proto__:null,Spinner:n,SpinnerArea:t,SpinnerColors:a,SpinnerSizes:o,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{k as S,o as a,a as b,n as c};
