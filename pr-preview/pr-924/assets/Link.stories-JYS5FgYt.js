import{j as i}from"./index-D6_wGsWO.js";import{X as a}from"./index-CWMfHjhQ.js";const s={title:"Komponenter/Link",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The visual style of the component.",table:{type:{summary:"string"}},defaultValue:{summary:"underline | plain"},options:["underline","plain"],control:{type:"radio"}},children:{description:"This is the linktext",table:{type:{summary:"string"}},control:"text"},external:{description:"If true, an icon will be included.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:"boolean"},href:{description:"This is the link.",table:{type:{summary:"string"}},control:"text"}}},e={args:{children:"Dette er en lenke",href:"/?path=/"},render:r=>i.jsx(a,{...r,children:r.children})};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Dette er en lenke",
    href: "/?path=/"
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const l=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{d as L,e as P};
