import{j as i}from"./jsx-runtime-sfY7k0Xq.js";import{A as o}from"./alert-Dr24E3sQ.js";const n={title:"Komponenter/Alert",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{title:"Dette er tittelen!",status:"info",variant:"subtle",size:"md"},argTypes:{title:{description:"The title of the alert.",table:{type:{summary:"string"}},defaultValue:{summary:""},control:{type:"text"}},status:{description:"The status of the alert. This changes the color of the alert.",table:{type:{summary:"error | success | warning | info | neutral"}},options:["error","success","warning","info","neutral"],defaultValue:{summary:"info"},control:{type:"radio"}},variant:{description:"The variant of the alert.",table:{type:{summary:"subtle | surface | outline | solid"}},options:["subtle","solid","outline","surface"],defaultValue:{summary:"subtle"},control:{type:"radio"}},size:{description:"The size of the alert.",table:{type:{summary:"sm | md | lg"}},options:["sm","md","lg"],control:{type:"radio"}}}},e={render:a=>i.jsx(o,{...a,children:"Dette er beskrivelsen."})};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <KvibAlert {...args}>Dette er beskrivelsen.</KvibAlert>
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{c as A,e as P};
