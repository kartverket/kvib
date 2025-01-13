import{j as i}from"./jsx-runtime-DQFEoQHt.js";import{m as t}from"./index-DyEURmN4.js";const l={title:"Komponenter/Alert",component:t,parameters:{docs:{story:{inline:!0}}},args:{title:"Alert title",status:"info",variant:"subtle",size:"md"},argTypes:{title:{description:"The title of the alert.",table:{type:{summary:"string"}},defaultValue:{summary:""},control:{type:"text"}},status:{description:"The status of the alert. This changes the color of the alert.",table:{type:{summary:"error | success | warning | info | neutral"}},options:["error","success","warning","info","neutral"],defaultValue:{summary:"info"},control:{type:"radio"}},variant:{description:"The variant of the alert.",table:{type:{summary:"subtle | surface | outline | solid"}},options:["subtle","solid","outline","surface"],defaultValue:{summary:"subtle"},control:{type:"radio"}},size:{description:"The size of the alert.",table:{type:{summary:"sm | md | lg"}},options:["sm","md","lg"],control:{type:"radio"}}}};t.displayName="Alert";const e={render:a=>i.jsx(t,{...a,children:"Informative description."})};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <KvibAlert {...args}>Informative description.</KvibAlert>
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const n=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:l},Symbol.toStringTag,{value:"Module"}));export{c as A,e as P};
