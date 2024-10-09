import{j as r}from"./extends-CwFRzn3r.js";import{S as a}from"./Search-1oD_E59N.js";import{S as W}from"./chunk-ZHMYA64R-V_96TD_T.js";const w={title:"Søk/Search",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{placeholder:{description:"Placeholder for text",table:{defaultValue:{summary:"Søk her..."}},control:"text"},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},searchButton:{description:"Add search button to input",table:{defaultValue:{summary:"none"}},options:["none","left","right"],control:{type:"radio"}},colorScheme:{description:"Change Icon color",table:{defaultValue:{summary:"green"}},options:["gray","red","green","blue"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},buttonVariant:{description:"Button variant if an icon is enabled",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"tertiary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},buttonWidth:{description:"Button width if an icon is enabled. Cannot be smaller than default, e.g. needs to be more than 2.5rem with size md",table:{type:{summary:"string"}},control:"text"},buttonText:{description:"Button text if an icon is enabled",table:{type:{summary:"string"}},control:"text"}},args:{}},t={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{placeholder:"Søk her...",variant:"outline",isDisabled:!1},render:e=>r.jsx(a,{...e})},n={args:{placeholder:"Søk her...",colorScheme:"green"},render:e=>r.jsxs(W,{h:"12rem",children:[r.jsx(a,{...e,variant:"outline"}),r.jsx(a,{...e,variant:"filled"}),r.jsx(a,{...e,variant:"flushed"}),r.jsx(a,{...e,variant:"unstyled"})]})},o={args:{searchButton:"left",placeholder:"Søk her...",variant:"outline",isDisabled:!1,colorScheme:"blue",buttonVariant:"secondary"},render:e=>r.jsx(a,{...e})},s={args:{searchButton:"right",placeholder:"Søk her...",variant:"outline",isDisabled:!1,colorScheme:"green"},render:e=>r.jsx(a,{...e})},i={args:{searchButton:"right",placeholder:"Søk her...",variant:"outline",isDisabled:!1,colorScheme:"green",buttonVariant:"primary",buttonWidth:"4rem"},render:e=>r.jsx(a,{...e})},c={args:{searchButton:"right",placeholder:"Søk her...",variant:"outline",isDisabled:!1,colorScheme:"blue",buttonVariant:"primary",buttonText:"Søk"},render:e=>r.jsx(a,{...e})},l={args:{placeholder:"Søk her...",variant:"outline"},render:e=>r.jsxs(W,{children:[r.jsx(a,{...e,searchButton:"right"}),r.jsx(a,{...e,searchButton:"left",colorScheme:"blue",buttonVariant:"secondary"}),r.jsx(a,{...e,searchButton:"right",colorScheme:"green",buttonWidth:"4rem",buttonVariant:"primary"}),r.jsx(a,{...e,searchButton:"right",colorScheme:"blue",buttonVariant:"primary",buttonText:"Søk"})]})};var u,d,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false
  },
  render: args => <KvibSearch {...args} />
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,p,S;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Søk her...",
    colorScheme: "green"
  },
  render: args => <Stack h={"12rem"}>
      <KvibSearch {...args} variant="outline" />
      <KvibSearch {...args} variant="filled" />
      <KvibSearch {...args} variant="flushed" />
      <KvibSearch {...args} variant="unstyled" />
    </Stack>
}`,...(S=(p=n.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var b,g,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    searchButton: "left",
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "blue",
    buttonVariant: "secondary"
  },
  render: args => <KvibSearch {...args} />
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,v,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    searchButton: "right",
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "green"
  },
  render: args => <KvibSearch {...args} />
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,V,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    searchButton: "right",
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "green",
    buttonVariant: "primary",
    buttonWidth: "4rem"
  },
  render: args => <KvibSearch {...args} />
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var j,K,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    searchButton: "right",
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "blue",
    buttonVariant: "primary",
    buttonText: "Søk"
  },
  render: args => <KvibSearch {...args} />
}`,...(D=(K=c.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var T,I,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Søk her...",
    variant: "outline"
  },
  render: args => <Stack>
      <KvibSearch {...args} searchButton="right" />
      <KvibSearch {...args} searchButton="left" colorScheme="blue" buttonVariant="secondary" />
      <KvibSearch {...args} searchButton="right" colorScheme="green" buttonWidth="4rem" buttonVariant="primary" />
      <KvibSearch {...args} searchButton="right" colorScheme="blue" buttonVariant="primary" buttonText="Søk" />
    </Stack>
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const z=["Search","SearchVariants","SearchIconLeft","SearchIconRight","SearchButtonVariant","SearchButtonText","SearchButtonAppearance"],C=Object.freeze(Object.defineProperty({__proto__:null,Search:t,SearchButtonAppearance:l,SearchButtonText:c,SearchButtonVariant:i,SearchIconLeft:o,SearchIconRight:s,SearchVariants:n,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{C as S,n as a,l as b,t as c};
