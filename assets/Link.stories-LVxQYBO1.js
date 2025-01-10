import{j as s}from"./jsx-runtime-DgHZ7iq2.js";import{ah as r}from"./index-CoJY4uhr.js";const o={title:"Komponenter/Link",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{variant:{description:"The visual style of the component.",table:{type:{summary:"string"}},defaultValue:{summary:"underline | plain"},options:["underline","plain"],control:{type:"radio"}},children:{description:"This is the linktext",table:{type:{summary:"string"}},control:"text"},external:{description:"If true, an icon will be included.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:"boolean"},href:{description:"This is the link.",table:{type:{summary:"string"}},control:"text"}}};r.displayName="Link";const e={args:{children:"This is a link",href:"/?path=/"},render:t=>s.jsx(r,{...t,children:t.children})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "This is a link",
    href: "/?path=/"
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const l=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:o},Symbol.toStringTag,{value:"Module"}));export{d as L,e as P};
