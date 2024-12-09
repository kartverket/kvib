import{j as l}from"./index-D6_wGsWO.js";import{aO as r}from"./index-CWMfHjhQ.js";const n={title:"Komponenter/Icon Button",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},args:{icon:"favorite",variant:"solid",size:"md",colorPalette:"green",iconFill:!1,loading:!1,disabled:!1},argTypes:{size:{description:"Size of Icon button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"select"}},variant:{description:"The variant of the IconButton.",table:{type:{summary:"solid | subtle | ghost | plain"},defaultValue:{summary:"primary"}},options:["solid","subtle","ghost","plain"],control:{type:"select"}},disabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},colorPalette:{control:{type:"select"},options:["green","blue","red","gray"],table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"green"}}},iconFill:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},loading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},e={render:s=>l.jsx(r,{...s})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <KvibIconButton {...args} />
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const i=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:n},Symbol.toStringTag,{value:"Module"}));export{c as I,e as P};
