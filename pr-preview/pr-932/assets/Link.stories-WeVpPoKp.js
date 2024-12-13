import{j as i}from"./index-D6_wGsWO.js";import{aK as o}from"./index-DVt2M2e3.js";const s={title:"Komponenter/Link",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The visual style of the component.",table:{type:{summary:"string"}},defaultValue:{summary:"underline | plain"},options:["underline","plain"],control:{type:"radio"}},children:{description:"This is the linktext",table:{type:{summary:"string"}},control:"text"},external:{description:"If true, an icon will be included.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:"boolean"},href:{description:"This is the link.",table:{type:{summary:"string"}},control:"text"}}},e={args:{children:"Dette er en lenke",href:"/?path=/"},render:r=>i.jsx(o,{...r,children:r.children})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Dette er en lenke",
    href: "/?path=/"
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const l=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{d as L,e as P};
