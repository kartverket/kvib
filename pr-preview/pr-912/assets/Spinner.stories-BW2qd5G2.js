import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{S as s}from"./spinner-DP07Pf0W.js";import{S as v}from"./stack-Bh3oWNRR.js";const h={title:"Komponenter/Spinner",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{color:{description:"The color of the spinner",table:{type:{summary:"string"}},control:"text"},emptyColor:{description:"The color of the empty area in the spinner",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}},control:"text"},label:{description:"For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.",table:{type:{summary:"string"},defaultValue:{summary:"Loading..."}},control:"text"},size:{description:"The size of the Spinner",table:{type:{summary:"xs | sm | md | lg | xl"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl"],control:{type:"radio"}},speed:{description:"The speed of the spinner",table:{type:{summary:"string"},defaultValue:{summary:"0.45s"}},control:"text"},thickness:{description:"The thickness of the spinner",table:{type:{summary:"string"},defaultValue:{summary:"2px"}},control:"text"}}},n={render:e=>r.jsx(s,{...e})},o={render:e=>r.jsxs(v,{children:[r.jsx(s,{...e,color:"blue"}),r.jsx(s,{...e,color:"green"}),r.jsx(s,{...e,color:"red"}),r.jsx(s,{...e,color:"gray"})]})},t={render:e=>r.jsxs(v,{children:[r.jsx(s,{...e,size:"xl"}),r.jsx(s,{...e,size:"lg"}),r.jsx(s,{...e,size:"md"}),r.jsx(s,{...e,size:"sm"}),r.jsx(s,{...e,size:"xs"})]})},a={args:{size:"xl",emptyColor:"gray.200",speed:"0.65s",color:"green.500",thickness:"4px"},render:e=>r.jsx(s,{...e})};var i,p,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <KvibSpinner {...args} />
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <KvibStack>
      <KvibSpinner {...args} color="blue" />
      <KvibSpinner {...args} color="green" />
      <KvibSpinner {...args} color="red" />
      <KvibSpinner {...args} color="gray" />
    </KvibStack>
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,S,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <KvibStack>
      <KvibSpinner {...args} size="xl" />
      <KvibSpinner {...args} size="lg" />
      <KvibSpinner {...args} size="md" />
      <KvibSpinner {...args} size="sm" />
      <KvibSpinner {...args} size="xs" />
    </KvibStack>
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "xl",
    emptyColor: "gray.200",
    speed: "0.65s",
    color: "green.500",
    thickness: "4px"
  },
  render: args => <KvibSpinner {...args} />
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const f=["Preview","SpinnerColors","SpinnerSizes","SpinnerArea"],k=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,SpinnerArea:a,SpinnerColors:o,SpinnerSizes:t,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{n as P,k as S,t as a,o as b};
