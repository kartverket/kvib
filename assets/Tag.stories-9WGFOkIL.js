import{j as n}from"./index-D6_wGsWO.js";import{ak as t}from"./index-DPEpWUr_.js";const i={title:"Komponenter/Tag",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the component.",table:{type:{summary:"solid | outline | plain"}},defaultValue:{summary:"solid"},options:["solid","outline","plain"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the Tag",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Tag",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},e={render:s=>n.jsx(t,{...s,children:"Eksempeltag"})};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: TagProps) => <KvibTag {...args}>Eksempeltag</KvibTag>
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const l=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,d as T};